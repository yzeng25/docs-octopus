---
id: mqtt-extension
title: Integrate with MQTT
---

Octopus provides two out-of-box ways to integrate with [MQTT](http://mqtt.org/):

1. Most Octopus adaptors, like [BLE adaptor](./ble) support to synchronize the device status via an MQTT broker. Get more MQTT extension adaptors [below](#supported-adaptors).
1. If the device naturally supports MQTT, the [MQTT adaptor](./mqtt) can be used as the first choice.

> This post mainly outlines the detail of the first way, if you want to know more about the MQTT adaptor, please view [here](./mqtt). If the above out-of-box ways cannot satisfy you, you can follow the [CONTRIBUTING](../../CONTRIBUTING.md) to contribute your idea or [develop a new adaptor](./develop.md).

Although the latest version of MQTT is v5.0, for the time being, Octopus does not support the revision, the main reason is the [corresponding development library](https://www.eclipse.org/paho/clients/golang/) does not support yet([paho.mqtt.golang/issues#347](https://github.com/eclipse/paho.mqtt.golang/issues/347)):

- [x] [MQTT 3.1](http://public.dhe.ibm.com/software/dw/webservices/ws-mqtt/mqtt-v3r1.html)
- [x] [MQTT 3.1.1](http://docs.oasis-open.org/mqtt/mqtt/v3.1.1/os/mqtt-v3.1.1-os.html)
- [ ] [MQTT 5.0](https://docs.oasis-open.org/mqtt/mqtt/v5.0/mqtt-v5.0.html)

Integrating with MQTT to expose the status of a device, in addition to giving the device an ability to use MQTT, can also expand the usage scenarios of the device, such as equipment interaction and equipment monitoring.

## MQTT

> MQTT is a machine-to-machine (M2M)/"Internet of Things" connectivity protocol. It was designed as an extremely lightweight publish/subscribe messaging transport. It is useful for connections with remote locations where a small code footprint is required and/or network bandwidth is at a premium.

Although MQTT's name contains "MQ", it is not a protocol for defining a message queue, actually, [the "MQ" refers to the MQseries product from IBM and has nothing to do with "Message Queue"](https://www.hivemq.com/blog/mqtt-essentials-part2-publish-subscribe/#distinction-from-message-queues). MQTT is a lightweight and binary protocol, and due to its minimal packet overhead, MQTT excels when transferring data over the wire in comparison to protocols like HTTP. MQTT provides a means of communication that can be pub/sub like a message queue, at the same time, many features are provided to enrich communication scenarios, such as QoS, Last will and testament, retained message and so on. To learn more about MQTT, there are a series of articles that are highly recommended: [MQTT Essentials](https://www.hivemq.com/mqtt-essentials/).

![mqtt-tcp-ip-stack](https://www.hivemq.com/img/blog/mqtt-tcp-ip-stack.png)

### Convention

> **MQTT uses subject-based filtering of messages**. **Every message contains a topic (subject)** that the broker can use to determine whether a subscribing client gets the message or not. 

In MQTT, the **topic** is a hierarchically-structured string that can be used to [filter and route messages](https://www.hivemq.com/blog/mqtt-essentials-part-5-mqtt-topics-best-practices/) and the **payload** data is agnostic which means the publisher can send binary data, text data, or even full-fledged XML or JSON, so designing the topic tree and payload schema is an important work of any MQTT deployment.

Octopus follows the [best practices of MQTT topic from MQTT Essentials](https://www.hivemq.com/blog/mqtt-essentials-part-5-mqtt-topics-best-practices/#best-practices) to construct the **topic** name, and marshals the **payload** data as JSON.

## Configuration

Octopus reorganizes the client parameters of [github.com/eclipse/paho.mqtt.golang](https://github.com/eclipse/paho.mqtt.golang/blob/4c98a2381d16c21ed2f9f131cec2429b0348ab0f/options.go#L53-L87), and then constructs the following configuration options. The available version of the configuration options is `v1alpha1`.

|  Versions | Available | Current |
|:---:|:---:|:---:|
|  [`v1alpha1`](./integrate_with_mqtt.md) | * | * |

The current official Adaptors such as BLE, Modbus and OPC-UA support the MQTT protocol extension using the same configuration (refer to the following `spec.template.spec.extension`).

```YAML
apiVersion: edge.cattle.io/v1alpha1
kind: DeviceLink
metadata:
 name: living-room-fan
spec:
 adaptor:
   node: edge-worker
   name: adaptors.edge.cattle.io/dummy
 model:
   apiVersion: "devices.edge.cattle.io/v1alpha1"
   kind: "DummySpecialDevice"
 template:
   metadata:
     labels:
       device: living-room-fan
   spec:
     extension:
       mqtt:
         client:
           server: tcp://test.mosquitto.org:1883
           maxReconnectInterval: 20s
         message:
           topic:
             prefix: cattle.io/octopus
           qos: 1
     protocol:
       location: "living_room"
     gear: slow
     "on": true
```

### Specification

The specification of MQTT options are valid in all MQTT extension adaptors, they are using for connecting the MQTT broker, guiding the connection, indicating which topic to publish/subscribe and encoding of payload data.

#### DeviceExtensionSpec

| Field | Description | Schema | Required |
|:---|:---|:---|:---:|
| mqtt | Specifies the MQTT settings. | [MQTTOptionsSpec](#mqttoptionsspec) | false |

#### MQTTOptionsSpec

| Field | Description | Schema | Required |
|:---|:---|:---|:---:|
| client | Specifies the client settings. | [MQTTClientOptions](#mqttclientoptions) | true |
| message | Specifies the message settings. | [MQTTMessageOptions](#mqttmessageoptions) | true |

#### MQTTClientOptions

| Field | Description | Schema | Required |
|:---|:---|:---|:---:|
| server | Specifies the server URI of MQTT broker, the format should be `schema://host:port`. The `schema` is one of the "ws", "wss", "tcp", "unix", "ssl", "tls" or "tcps". | string | true |
| protocolVersion | Specifies the MQTT protocol version that the cluster uses to connect to broker. Legitimate values are 3 - MQTT 3.1 and 4 - MQTT 3.1.1 | uint | false |
| will | Specifies the last will message that the client gives it to the broker. | [MQTTClientWillMessage](#mqttclientwillmessage) | false |
| basicAuth | Specifies the username and password that the client connects to the MQTT broker. | [MQTTClientBasicAuth](#mqttclientbasicauth) | false |
| tlsConfig | Specifies the TLS configuration that the client connects to the MQTT broker. | [MQTTClientTLS](#mqttclienttls)  | false |
| cleanSession | Specifies setting the "clean session" flag in the connect message that the MQTT broker should not, default to `true`. | bool  | false |
| store | Specifies to provide message persistence in cases where QoS level is 1 or 2, the default store is `memory`. | [MQTTClientStore](#mqttclientstore)  | false |
| resumeSubs | Specifies to enable resuming of stored (un)subscribe messages when connecting but not reconnecting. This is only valid if `CleanSession` is false. The default value is `false`. | bool | false |
| connectTimeout | Specifies the amount of time that the client try to open a connection to an MQTT broker before timing out and getting error. A duration of 0 never times out. The default value is `30s`. | string  | false |
| keepAlive | Specifies the amount of time that the client should wait before sending a PING request to the broker. The default keep alive is `10s`. | string | false |
| pingTimeout | Specifies the amount of time that the client should wait after sending a PING request to the brokerThe default value is `10s`. | string | false |
| order | Specifies the message routing to guarantee order within each QoS level. The default value is  "true". | bool | false |
| writeTimeout | Specifies the amount of time that the client publish a message successfully before getting a timeout error, default to `30s`. | string  | false |
| autoReconnect | Configures using the automatic reconnection logic, default to `true`. | bool  | false |
| maxReconnectInterval | Specifies the amount of time that the client should wait before reconnecting to the broker, default to `10m`. | string  | false |
| messageChannelDepth | Specifies the size of the internal queue that holds messages while the client is temporarily offline, default to `100`. | uint  | false |
| httpHeaders | Specifies the additional HTTP headers that the client sends in the WebSocket opening handshake. | map[string][]string  | false |


#### MQTTClientWillMessage

| Field | Description | Schema | Required |
|:---|:---|:---|:---:|
| topic | Specifies the topic for publishing the last will message. if not set, the will topic will append "$will" to the topic name specified in global settings as its topic name. | string  | false |
| payloadEncode| Defines the encoded method of publishing message, options are `raw` and `base64`, default to raw. | string | false |
| payloadContent | Specifies the payload content. | string | false |
| qos | Specifies the QoS of the message, default value is `0`. options are 0, 1, 2. | byte | false |
| retained | Specifies the message to be retained,  default value is `false`. | bool | false |

#### MQTTClientBasicAuth

| Field | Description | Schema | Required |
|:---|:---|:---|:---:|
| name | MQTT server basic auth username. | string  | false |
| password | MQTT broker basic auth password. | string  | false |

#### MQTTClientTLS

| Field | Description | Schema | Required |
|:---|:---|:---|:---:|
| caFilePem |  The PEM format content of the CA certificate, which is used for validate the server certificate with. | string  | false |
| caFilePemRef | Specifies the relationship of DeviceLink's references to refer to the value as the CA file PEM content . | [DeviceLinkReferenceRelationship](#devicelinkreferencerelationship)  | false |
| certFilePem | The PEM format content of the certificate, which is used for client authenticate to the server. | string  | true |
| certFilePemRef | Specifies the relationship of DeviceLink's references to refer to the value as the client certificate file PEM content . | [DeviceLinkReferenceRelationship](#devicelinkreferencerelationship)  | false |
| keyFilePem | The PEM format content of the key, which is used for client authenticate to the server. | string  | true |
| keyFilePemRef | Specifies the relationship of DeviceLink's references to refer to the value as the client key file PEM content. | [DeviceLinkReferenceRelationship](#devicelinkreferencerelationship)  | true |
| serverName| Indicates the name of the server, ref to http://tools.ietf.org/html/rfc4366#section-3.1  | string  | false |
| insecureSkipVerify | Doesn't validate the server certificate, default value is `false`. | bool  | false |

#### DeviceLinkReferenceRelationship

| Field | Description | Schema | Required |
|:---|:---|:---|:---:|
| name | Specifies the k8s resource name of the reference(currently only support k8s secret and configmap within the same namespace). | string | true |
| item | Specifies the item name of the referred reference. | string | true |

#### MQTTClientStore

| Field | Description | Schema | Required |
|:---|:---|:---|:---:|
| type | Specifies the type of storage. Options are `memory` and `file`, the default value is `memory`. | string | false |
| direcotryPrefix | Specifies the directory prefix of the storage, if using file store. The default value is `/var/run/octopus/mqtt`. | string | false |

#### MQTTMessageOptions

| Field | Description | Schema | Required |
|:---|:---|:---|:---:|
| topic | Specifies the topic settings. | [MQTTMessageTopic](#mqttmessagetopic) | true |
| payloadEncode | Defines the encoded method of publishing message, options are `raw` and `base64`, default to raw. | string | false |
| qos | Specifies the QoS of the message, default value is `0`. options are 0, 1, 2. | byte | false |
| retained | Specifies the message to be retained,  default value is `false`. | bool | false |
| waitTimeout | Specifies the amount of time that the client should wait after operating, default value to `0s` - never times out. | string | false |

#### MQTTMessageTopic

| Field | Description | Schema | Required |
|:---|:---|:---|:---:|
| name | Specifies the static name of topic - (default to use this static name if both `name` and `prefix` are configured). | string | false |
| prefix | Specifies the prefix for the dynamic name of topic. The prefix is required for dynamic name. | string | false |
| with | Specifies the mode for the dynamic name of topic. Options are `nn`(k8s name+namespace) and `uid`(k8s resource uid), the default mode is `nn`. | string | false |


### Specification YAML

The specification of MQTT options are valid in all MQTT extension adaptors, they are using for connecting the MQTT broker server, guiding the connection, indicating which topic to publish/subscribe and encoding of payload data and so on.

> REQUIRED is the required field to be filled.

```yaml

# Specifies the client settings.
client:

  # Specifies the server URI of MQTT broker, the format should be `schema://host:port`.
  # The "schema" is one of the "ws", "wss", "tcp", "unix", "ssl", "tls" or "tcps".
  # REQUIRED
  server: <string>
  
  # Specifies the MQTT protocol version that the cluster uses to connect to broker.
  # Legitimate values are currently 3 - MQTT 3.1 or 4 - MQTT 3.1.1.
  protocolVersion: <int, 3|4>
  
  # Specifies the will message that the client gives it to the broker,
  # which can be published to any clients that are subscribed the provided topic.
  will:
  
    # Specifies the topic for publishing the will message,
    # if not set, the will topic will append "$will" to the topic name specified
    # in global settings as its topic name.
    topic: 
      
      # Specifies the static name of topic.
      name: <string>
  
    # Specifies the encode way of payload content.
    #   raw: Not encode.
    #   base64: The output (published) data is encoded with Base64, and the input (subscribed) data is decoded with Base64. 
    # The "base64" way allows to input bytes (`payloadContent`) that cannot be characterized.
    # The default way is "raw".
    payloadEncode: <string, raw|base64>

    # Specifies the payload content.
    # REQUIRED
    payloadContent: <string>
  
    # Specifies the QoS of the will message.
    #   0: Send at most once.
    #   1: Send at least once.
    #   2: Send exactly once.
    # The default value is "0".
    qos: <int, 0|1|2>
  
    # Specifies the will message to be retained.
    # The default value is "false".
    retained: <bool>
  
  # Specifies the username and password that the client connects
  # to the MQTT broker. Without the use of `tlsConfig`,
  # the account information will be sent in plaintext across the wire.
  basicAuth:
    name: <string>
    passsword: <string>
  
  # Specifies the TLS configuration that the client connects to the MQTT broker.
  tlsConfig:
    
    # The PEM format content of the CA certificate,
    # which is used for validate the server certificate with.
    caFilePem: <string>
    
    # The PEM format content of the certificate and key,
    # which is used for client authenticate to the server.
    certFilePem: <string>
    keyFilePem: <string>
    
    # Indicates the name of the server, ref to http://tools.ietf.org/html/rfc4366#section-3.1.
    serverName: <string>
  
    # Doesn't validate the server certificate.
    insecureSkipVerify: <bool>

  # Specifies setting the "clean session" flag in the connect message that the MQTT broker should not
  # save it. Any messages that were going to be sent by this client before disconnecting previously but didn't send upon connecting to the broker.
  # The default value is "true".
  cleanSession: <bool>
  
  # Specifies to provide message persistence in cases where QoS level is 1 or 2.
  # The default store is "memory".
  store: 
    
    # Specifies the type of storage.
    # The default store is "memory".
    type: <string, memory|file>
    
    # Specifies the directory prefix of the storage, if using file store.
    # The default value is "/var/run/octopus/mqtt".
    direcotryPrefix: <string>

  # Specifies to enable resuming of stored (un)subscribe messages when connecting but not reconnecting.
  # This is only valid if `cleanSession` is false.
  # The default value is "false".
  resumeSubs: <bool>

  # Specifies the amount of time that the client try to open a connection
  # to an MQTT broker before timing out and getting error.
  # A duration of 0 never times out.
  # The default value is "30s".
  connectionTime: <string>

  # Specifies the amount of time that the client should wait
  # before sending a PING request to the broker. This will
  # allow the client to know that the connection has not been lost
  # with the server.
  # A duration of 0 never keeps alive.
  # The default keep alive is "30s".
  keepAlive: <string>

  # Specifies the amount of time that the client should wait
  # after sending a PING request to the broker. This will
  # allow the client to know that the connection has been lost
  # with the server.
  # A duration of 0 may cause unnecessary timeout error.
  # The default value is "10s".
  pingTimeout: <string>
  
  # Specifies the message routing to guarantee order within each QoS level. If set to false,
  # the message can be delivered asynchronously from the client to the application and
  # possibly arrive out of order.
  # The default value is "true".
  order: <bool>
  
  # Specifies the amount of time that the client publish a message successfully before
  # getting a timeout error.
  # A duration of 0 never times out.
  # The default value is "30s".
  writeTimeout: <string>
  
  # Configures using the automatic reconnection logic.
  # The default value is "true".
  autoReconnect: <bool>
  
  # Specifies the amount of time that the client should wait
  # before reconnecting to the broker. The first reconnect interval is 1 second,
  # and then the interval is incremented by *2 until `MaxReconnectInterval` is reached.
  # This is only valid if `AutoReconnect` is true.
  # A duration of 0 may trigger the reconnection immediately.
  # The default value is "10m".
  maxReconnectInterval: <string>

  # Specifies the size of the internal queue that holds messages
  # while the client is temporarily offline, allowing the application to publish
  # when the client is reconnected.
  # This is only valid if `autoReconnect` is true.
  # The default value is "100".
  messageChannelDepth: <int>
  
  # Specifies the additional HTTP headers that the client sends in the WebSocket opening handshake.
  httpHeaders: <map[string][]string>

# Specifies the message settings.
message:
    
  # Specifies the topic settings.
  # REQUIRED
  topic:
      
    # Specifies the static name of topic.
    name: <string>
      
    # Specifies the prefix for the dynamic name of topic.
    # The prefix is REQUIRED for dynamic name.
    prefix: <string>
      
    # Specifies the mode for the dynamic name of topic.
    # The default mode is "nn".
    with: <string, nn|uid>

  # Specifies the encode way of payload data.
  #   raw: Not encode.
  #   base64: The output (published) data is encoded with Base64, and the input (subscribed) data is decoded with Base64.
  # The default way is "raw".
  payloadEncode: <string, raw|base64>

  # Specifies the QoS of the will message.
  #   0: Send at most once.
  #   1: Send at least once.
  #   2: Send exactly once.
  # The default value is "0".
  qos: <int, 0|1|2>

  # Specifies the will message to be retained.
  # The default value is "false".
  retained: <bool>

  # Specifies the amount of time that the client should wait after operating.
  # A duration of 0 never times out.
  # The default value is "0s".
  waitTimeout: <string>

```

### Status

The status of MQTT options are also valid in all MQTT extension adaptors, they are describing the observed status of the MQTT configuration.

```yaml

# Observes the client settings.
client:

  # Observes the broker server URI.
  server: <string>
  
  # Observes the protocol version.
  protocolVersion: <int>

  # Observes the will message that the client gives it to the broker.
  will:

    # Observes the topic for publishing the will message.
    topicName: <string>
    
    # Observes the encode way of payload content.
    payloadEncode: <string>

    # Observes the QoS of the will message.
    qos: <int>

    # Observes if retaining the will message.
    retained: <bool>

  # Observes if configuring basic authentication.
  configBasicAuth: <bool>

  # Observes if configuring TLS.
  configTLS: <bool>
  
  # Observes if setting the "clean session" flag.
  cleanSession: <bool>

  # Observes the store type.
  store:

     # Observes the type of storage.
     type: <string>
     
     # Observes the directory of the file storage.
     directory: <string>
  
  # Observes if enabling resuming of stored (un)subscribe messages when connecting but not reconnecting.
  resumeSubs: <bool>

  # Observes the amount of time that the client try to open a connection
  # to an MQTT broker before timing out and getting error.
  connectTimeout: <string>

  # Observes the amount of time that the client should wait
  # before sending a PING request to the broker.
  keepAlive: <string>
  
  # Observes the amount of time that the client should wait
  # after sending a PING request to the broker.
  pingTimeout: <string>
  
  # Observes the message routing to guarantee order within each QoS level.
  order: <bool>

  # Observes the amount of time that the client publish a message successfully before getting a timeout error.
  writeTimeout: <string>
  
  # Observes if using the automatic reconnection logic.
  autoReconnect: <bool>
  
  # Observes the amount of time that the client should wait before reconnecting to the broker.
  maxReconnectInterval: <int>

  # Observes the size of the internal queue that holds messages while the client is temporarily offline, 
  # allowing the application to publish when the client is reconnected.
  messageChannelDepth: <int>
  
  # Observes the additional HTTP headers that the client sends in the WebSocket opening handshake.
  httpHeaders: <map[string][]string>
 
# Observes the message settings. 
message:
  
  # Observes the topic for publishing/subscribing the message.
  topicName: <string>
  
  # Observes the encode way of payload content.
  payloadEncode: <string>

  # Observes the QoS of the message.
  qos: <int>
  
  # Observes if retaining the message.
  retained: <bool>
  
  # Observes the amount of time that the client should wait after operating.
  waitTimeout: <string>

```

## Supported Adaptors

- [dummy](./dummy)
- [ble](./ble)
- [modbus](./modbus)
- [opcua](./opc-ua)

