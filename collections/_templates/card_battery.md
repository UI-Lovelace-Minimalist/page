---
title: Battery Card
name: card_battery
category: card
explanation: "The `battery-card` is a slightly enhanced `generic-card`, just to ease the use. You could always configure it from the `generic-card` yourself."
image_path: "https://via.placeholder.com/426x96/efefef/999999?text=Sorry,+no+image+yet"
internal: false
generator_install: true
generator_example: true
generator_button: true
variables:
  - name: entity
    type: entry
    example: sensor.livingroom_thermometer_battery
    required: true 
    explanation: "This is your battery entity"
  - name: ulm_card_battery_attribute
    type: variable
    example: battery_attribute
    required: false 
    explanation: "If your entity provides the battery percent in an attribute (= not as an own sensor), fill in the <u>attributes name</u> here. Eg. if you have `sensor.livingroom_thermometer` and the attribute for your battery power is `sensor.livingroom_thermometer.attributes.battery_percent`, you fill in <i>battery_percent</i> here."
yaml: |-
  - type: 'custom:button-card'
    template: card_battery
    variables:
      ulm_card_battery_attribute: battery_attribute
    entity: sensor.livingoom_thermometer_battery
ui: |-
  type: 'custom:button-card'
  template: card_battery
  variables:
    ulm_card_battery_attribute: battery_attribute
  entity: sensor.livingoom_thermometer_battery
code: |-
  card_battery:
    template: card_generic
    icon: |
      [[[
          var battery = variables.ulm_card_battery_attribute != null ? states[entity.entity_id].attributes. + variables.ulm_card_battery_attribute : entity.state;
          var icon = 'mdi:help-circle-outline';
          if (battery >= 90){
            icon = 'mdi:battery';
            return icon;
          } else if(battery >= 80){
            icon = 'mdi:battery-90';
            return icon;
          } else if(battery >= 70){
            icon = 'mdi:battery-80️';
            return icon;
          } else if(battery >= 60){
            icon = 'mdi:battery-70️';
            return icon;
          } else if(battery >= 50){
            icon = 'mdi:battery-60️';
            return icon;
          } else if(battery >= 40){
            icon = 'mdi:battery-50️';
            return icon;
          } else if(battery >= 30){
            icon = 'mdi:battery-40️';
            return icon;
          } else if(battery >= 20){
            icon = 'mdi:battery-30️';
            return icon;
          } else if(battery >= 10){
            icon = 'mdi:battery-20️';
            return icon;
          } else if(battery >= 0){
            icon = 'mdi:battery-10️';
            return icon;
          } else if(battery == 0){
            icon = 'mdi:battery-outline️';
            return icon;
          }
      ]]]
---