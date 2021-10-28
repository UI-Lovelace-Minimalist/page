---
title: Power Outlet Card
name: card_power_outlet
category: card
explanation: "This is the `power-outlet-card`. It shows you the state of a power outlet, and if configured, the actual power consumption of the power outlet."
image_path: "/assets/images/outlet.png"
internal: false
generator_install: true
generator_example: true
generator_button: true
variables:
  - name: entity
    type: entry
    example: switch.power_outlet_livingroom
    required: true 
    explanation: ""
  - name: name
    type: entry
    example: Power Outlet Livingroom
    required: true 
    explanation: ""
  - name: ulm_card_power_outlet_consumption_sensor
    type: variable
    example: sensor.power_outlet_livingroom_consumption
    required: false 
    explanation: "If you set this sensor, the `power-outlet-card` shows the energy consumption next to the state."
yaml: |-
  - type: 'custom:button-card'
    template: card_power_outlet
    variables:
      ulm_card_power_outlet_consumption_sensor: sensor.power_outlet_livingroom_consumption 
    entity: switch.power_outlet_livingroom
    name: Power Outlet Livingroom
ui: |-
  type: 'custom:button-card'
  template: card_power_outlet
  variables:
    ulm_card_power_outlet_consumption_sensor: sensor.power_outlet_livingroom_consumption 
  entity: switch.power_outlet_livingroom
  name: Power Outlet Livingroom
code: |-
  card_power_outlet:
    template: 
      - yellow
      - icon_info_bg 
    label: |-
      [[[ 
        if (entity.state =='on') && (variables.ulm_card_power_outlet_consumption_sensor != '' {
          return entity.label + ' ' + variables.ulm_card_power_outlet_consumption_sensor + 'W';
        } else {
          return entity.label;
        }
      ]]]
---