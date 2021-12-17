---
title: Battery Card
name: card_battery
category: card
explanation: "The `battery-card` is a slightly enhanced `generic-card`, just to ease the use. You could always configure it from the `generic-card` yourself."
image_path: "/assets/images/card_battery.png"
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
  - name: ulm_card_battery_battery_state_entity_id
    type: variable
    example: sensor.phone_battery_charging_status
    required: false 
    explanation: ""
  - name: ulm_card_battery_charger_type_entity_id
    type: variable
    example: sensor.phone_battery_charging_status
    required: false 
    explanation: ""
  - name: ulm_card_battery_battery_level_danger
    type: variable
    example: 10
    required: false 
    explanation: ""
  - name: ulm_card_battery_battery_level_warning
    type: variable
    example: 30
    required: false 
    explanation: ""
  - name: ulm_card_battery_color_battery_level_danger
    type: variable
    example: "var(--google-red)"
    required: false 
    explanation: ""
  - name: ulm_card_battery_color_battery_level_warning
    type: variable
    example: "var(--google-yellow)"
    required: false 
    explanation: ""
  - name: ulm_card_battery_color_battery_level_ok
    type: variable
    example: s"var(--google-green)"
    required: false 
    explanation: ""

yaml: |-
  - type: 'custom:button-card'
    template: card_battery
    entity: sensor.mi_9_battery_level
    variables:
      ulm_card_battery_attribute: YOUR_BATTERY_ATTRIBUTE
      ulm_card_battery_battery_state_entity_id: YOUR_battery_state_entity_id
      ulm_card_battery_charger_type_entity_id: YOUR_charger_type_entity_id
      ulm_card_battery_battery_level_danger: 10
      ulm_card_battery_battery_level_warning: 30
      ulm_card_battery_color_battery_level_danger: "var(--google-red)"
      ulm_card_battery_color_battery_level_warning: "var(--google-yellow)"
      ulm_card_battery_color_battery_level_ok: "var(--google-green)"
    name: Smartphone
ui: |-
  type: 'custom:button-card'
  template: card_battery
  entity: sensor.mi_9_battery_level
  variables:
    ulm_card_battery_attribute: YOUR_BATTERY_ATTRIBUTE
    ulm_card_battery_battery_state_entity_id: YOUR_battery_state_entity_id
    ulm_card_battery_charger_type_entity_id: YOUR_charger_type_entity_id
    ulm_card_battery_battery_level_danger: 10
    ulm_card_battery_battery_level_warning: 30
    ulm_card_battery_color_battery_level_danger: "var(--google-red)"
    ulm_card_battery_color_battery_level_warning: "var(--google-yellow)"
    ulm_card_battery_color_battery_level_ok: "var(--google-green)"
  name: Smartphone
code: |-
  card_battery:
    template:
      - "icon_info_bg"
    tap_action:
      action: "more-info"
    variables:
      ulm_card_battery_attribute:
      ulm_card_battery_battery_state_entity_id:
      ulm_card_battery_charger_type_entity_id:
      ulm_card_battery_battery_level_danger:
      ulm_card_battery_battery_level_warning:
      ulm_card_battery_color_battery_level_danger: "var(--google-red)"
      ulm_card_battery_color_battery_level_warning: "var(--google-yellow)"
      ulm_card_battery_color_battery_level_ok: "var(--google-green)"
    triggers_update: "all"
    icon: |
      [[[
        var icon = "mdi:help-circle-outline";
        //get battery level
        var battery_level = variables.ulm_card_battery_attribute !== null
          ? states[entity.entity_id].attributes[variables.ulm_card_battery_attribute]
          : states[entity.entity_id].state;
        // generate icon-infix
        var infix;
        if(variables.ulm_card_battery_charger_type_entity_id == null) {
          // is charging?
          infix = variables.ulm_card_battery_battery_state_entity_id !== null
                  && states[variables.ulm_card_battery_battery_state_entity_id].state =="charging"
                  ? "-charging" : ""
        } else {
          // is charging/ is charging wireless?
          switch (states[variables.ulm_card_battery_charger_type_entity_id].state) {
            case "wireless":
              infix = "-charging-wireless";
              break;
            case "ac":
              infix = "-charging";
              break;
            default:
              infix = "";
          }
        }
        if (battery_level == 100) {
          icon = "mdi:battery";
        } else if (battery_level >= 90) {
          icon = "mdi:battery"+infix+"-90";
        } else if (battery_level >= 80) {
          icon = "mdi:battery"+infix+"-80";
        } else if (battery_level >= 70) {
          icon = "mdi:battery"+infix+"-70";
        } else if (battery_level >= 60) {
          icon = "mdi:battery"+infix+"-60";
        } else if (battery_level >= 50) {
          icon = "mdi:battery"+infix+"-50";
        } else if (battery_level >= 40) {
          icon = "mdi:battery"+infix+"-40";
        } else if (battery_level >= 30) {
          icon = "mdi:battery"+infix+"-30";
        } else if (battery_level >= 20) {
          icon = "mdi:battery"+infix+"-20";
        } else if (battery_level >= 10) {
          icon = "mdi:battery"+infix+"-10";
        } else {
          icon = "mdi:battery"+infix+"-outline";
        }
        return icon;
      ]]]
    label: |
      [[[
        var battery_level = variables.ulm_card_battery_attribute !== null
          ? states[entity.entity_id].attributes[variables.ulm_card_battery_attribute]
          : states[entity.entity_id].state;
        return battery_level + "%";
      ]]]
    name: |
      [[[
        return states[entity.entity_id].attributes.friendly_name;
      ]]]
    styles:
      icon:
        - color: >
            [[[
                // --color-theme as default
                var color = 'rgba(var(--color-theme),0.9)';
                var battery_level = variables.ulm_card_battery_attribute !== null
                ? states[entity.entity_id].attributes[variables.ulm_card_battery_attribute]
                : states[entity.entity_id].state;
                // color based on battery_level
                if(variables.ulm_card_battery_battery_level_danger !== null
                || variables.ulm_card_battery_battery_level_warning !== null ) {
                  color = variables.ulm_card_battery_color_battery_level_ok ;
                  if(variables.ulm_card_battery_battery_level_warning>=battery_level) {
                    color = variables.ulm_card_battery_color_battery_level_warning
                  }
                  if(variables.ulm_card_battery_battery_level_danger>=battery_level) {
                    color = variables.ulm_card_battery_color_battery_level_danger
                  }
                }
              return color;
            ]]]
      label:
        - align-self: "end"
        - justify-self: "start"
        - font-weight: "bold"
        - font-size: "14px"
        - margin-left: "12px"
        - filter: "opacity(100%)"
      name:
        - justify-self: "start"
        - align-self: "start"
        - font-weight: "bolder"
        - font-size: "12px"
        - filter: "opacity(40%)"
        - margin-left: "12px"
      grid:
        - grid-template-areas: "'i l' 'i n'"
        - grid-template-columns: "min-content auto"
        - grid-template-rows: "min-content min-content"
---