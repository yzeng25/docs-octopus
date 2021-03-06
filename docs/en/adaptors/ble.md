---
id: ble
title: BLE Adaptor
---

### Introduction

BLE stands for Bluetooth Low Energy (marketed as Bluetooth Smart). BLE is a form of wireless communication designed for short-range communications. 

BLE adaptor implements the Bluetooth protocol and helps to define the attributes of the connected BLE device.

### Registration Information

|  Versions | Register Name | Endpoint Socket | Available |
|:---:|:---:|:---:|:---:|
|  `v1alpha1` | `adaptors.edge.cattle.io/ble` | `ble.sock` | * |

### Support Model

| Kind | Group | Version | Available | 
|:---:|:---:|:---:|:---:|
| `BluetoothDevice` | `devices.edge.cattle.io` | `v1alpha1` | * |

### Support Platform

| OS | Arch |
|:---:|:---|
| `linux` | `amd64` |
| `linux` | `arm` |
| `linux` | `arm64` |

### Usage

```shell script
$ kubectl apply -f https://raw.githubusercontent.com/cnrancher/octopus/master/adaptors/ble/deploy/e2e/all_in_one.yaml
```

### Authority

Grant permissions to Octopus as below:

```text
  Resources                                   Non-Resource URLs  Resource Names  Verbs
  ---------                                   -----------------  --------------  -----
  bluetoothdevices.devices.edge.cattle.io         []                 []              [create delete get list patch update watch]
  bluetoothdevices.devices.edge.cattle.io/status  []                 []              [get patch update]
```

### Example of BLE deviceLink YAML
```YAML
apiVersion: edge.cattle.io/v1alpha1
kind: DeviceLink
metadata:
  name: xiaomi-temp-rs2201
spec:
  adaptor:
    node: edge-worker
    name: adaptors.edge.cattle.io/ble
  model:
    apiVersion: "devices.edge.cattle.io/v1alpha1"
    kind: "BluetoothDevice"
  template:
    metadata:
      labels:
        device: xiaomi-temp-rs2201
    spec:
      parameters:
        syncInterval: 15s
        timeout: 10s
      extension:
        mqtt:
          client:
            server: tcp://test.mosquitto.org:1883
          message:
            topic:
              prefix: cattle.io/octopus
              with: nn # namespace/name
      protocol:
        name: "MJ_HT_V1"
        macAddress: ""
      properties:
      - name: data
        description: XiaoMi temp sensor with temperature and humidity data
        accessMode: NotifyOnly
        visitor:
          characteristicUUID: 226c000064764566756266734470666d
```
For more BLE deviceLink examples, please refer to the [deploy/e2e](https://github.com/cnrancher/octopus/tree/master/adaptors/ble/deploy/e2e) directory.

### BLE Device Spec

Parameter | Description | Scheme | Required
--- | --- | --- | ---
parameters | Parameter of the opcua device| *[DeviceParamters](#deviceparamters) | false
protocol | Device protocol config  | [DeviceProtocol](#deviceprotocol) | true
properties | Device properties     | []*[DeviceProperty](#deviceproperty) | false
extension | Integrate with deivce MQTT extension  | *[DeviceExtension](#deviceextension) | false


#### DeviceParamters

Parameter | Description | Scheme | Required
--- | --- | --- | ---
syncInterval | Device properties sync interval, default to `15s`  | string | false
timeout |  Device connection timeout, default to `10s` | string | false

#### DeviceProtocol

Parameter | Description | Scheme | Required
--- | --- | --- | ---
name | Device name  | string | NOT required when the device macAddress is provided
macAddress |  Device access mac address  | string | NOT required when the device name is provided

#### DeviceProperty

Parameter | Description | Scheme | Required
--- | --- | --- | ---
name | Property name  | string | true
description |  Property description  | string | false
accessMode | Property accessMode  | *[PropertyAccessMode](#propertyaccessmode) | true
visitor | Property visitor | *[PropertyVisitor](#propertyvisitor) | true

#### PropertyAccessMode

Parameter | Description | Scheme | Required
--- | --- | --- | ---
ReadOnly   | Property access mode is read only  | string | false
ReadWrite  | Property access mode is read and write  | string | false
NotifyOnly | Property access mode is notify only  | string | false

#### PropertyVisitor

Parameter | Description | Scheme | Required
--- | --- | --- | ---
characteristicUUID | Property UUID  | string | true
defaultValue | Config data write to the bluetooth device(set when access mode is `ReadWrite`), for example `ON` configed in the dataWrite  | string | false
dataWrite | Responsible for converting the data from the string into []byte that is understood by the bluetooth device, for example: `"ON":[1], "OFF":[0]` | string | false
dataConverter | Responsible for converting the data being read from the bluetooth device into string | *[BluetoothDataConverter](#bluetoothdataconverter) | false

#### BluetoothDataConverter

Parameter | Description | Scheme | Required
--- | --- | --- | ---
startIndex | Specifies the start index of the incoming byte stream to be converted  | int | true
endIndex | Specifies the end index of incoming byte stream to be converted | int | true
shiftLeft | Specifies the number of bits to shift left | int | false
shiftRight | Specifies the number of bits to shift right | int | false
orderOfOperations | Specifies in what order the operations | []*[BluetoothOperations](#BluetoothOperations) | false

#### BluetoothOperations

Parameter | Description | Scheme | Required
--- | --- | --- | ---
operationType | Specifies the operation to be performed | *[BluetoothArithmeticOperationType](#bluetootharithmeticoperationtype) | true
operationValue | Specifies with what value the operation is to be performed | string | true

#### BluetoothArithmeticOperationType

Parameter | Description | Scheme | Required
--- | --- | --- | ---
Add | Arithmetic operation of add | string | false
Subtract | Arithmetic operation of subtract | string | false
Multiply | Arithmetic operation of multiply | string | false
Divide | Arithmetic operation of divide | string | false

#### DeviceExtension

- reference the [example YAML](#example-of-ble-devicelink-yaml) of BLE device for MQTT integration.
- check [Integrate with MQTT Documentation](./mqtt-extension) for more details.
