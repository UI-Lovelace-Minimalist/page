function generateInstallCode ()
{
  var header = '';

  var button_card_templates = `  ### CHIPS ###
  chip_temperature:
    template: chips
    triggers_update: 
      - "[[[ variables.ulm_chip_temperature_weather ]]]"
      - "[[[ variables.ulm_chip_temperature_outside ]]]"
      - "[[[ variables.ulm_chip_temperature_inside ]]]"
    label: |
      [[[
        var icon = '🌡️';
        if (states[variables.ulm_chip_temperature_weather].state == 'clear-night'){
          var icon = '🌙';
        } else if(states[variables.ulm_chip_temperature_weather].state == 'cloudy'){
          var icon = '☁️';
        } else if(states[variables.ulm_chip_temperature_weather].state == 'exceptional'){
          var icon = '🌞';
        } else if(states[variables.ulm_chip_temperature_weather].state == 'fog'){
          var icon = '🌫️';
        } else if(states[variables.ulm_chip_temperature_weather].state == 'hail'){
          var icon = '⛈️';
        } else if(states[variables.ulm_chip_temperature_weather].state == 'lightning'){
          var icon = '⚡';
        } else if(states[variables.ulm_chip_temperature_weather].state == 'lightning-rainy'){
          var icon = '⛈️';
        } else if(states[variables.ulm_chip_temperature_weather].state == 'partlycloudy'){
          var icon = '⛅';
        } else if(states[variables.ulm_chip_temperature_weather].state == 'pouring'){
          var icon = '🌧️';
        } else if(states[variables.ulm_chip_temperature_weather].state == 'rainy'){
          var icon = '💧';
        } else if(states[variables.ulm_chip_temperature_weather].state == 'snowy'){
          var icon = '❄️';
        } else if(states[variables.ulm_chip_temperature_weather].state == 'snowy-rainy'){
          var icon = '🌨️';
        } else if(states[variables.ulm_chip_temperature_weather].state == 'sunny'){
          var icon = '☀️';
        } else if(states[variables.ulm_chip_temperature_weather].state == 'windy'){
          var icon = '🌪️';
        }
        return icon + ' ' + states[variables.ulm_chip_temperature_outside].state + '° / ' + states[variables.ulm_chip_temperature_inside].state + '°' ;
      ]]]
  
  chip_icon_only:
    template: chips
    variables:
      icon: '❔'
    show_icon: true
    icon: "[[[ return variables.ulm_chip_icon_state_icon ? variables.ulm_chip_icon_state_icon : variables.icon ]]]"
    styles:
      grid:
        - grid-template-areas: '"i"'
  
  chip_icon_state:
    template: chips
    variables:
      icon: "❔"
    triggers_update:
      - "[[[ variables.ulm_chip_icon_state_entity ]]]"
    show_icon: true
    show_label: true
    icon: "[[[ return variables.ulm_chip_icon_state_icon ? variables.ulm_chip_icon_state_icon : variables.icon ]]]"
    label: "[[[ return variables.ulm_chip_icon_state_entity ? states[variables.ulm_chip_icon_state_entity].state : '' ]]]"
    styles:
      label:
        - justify-self: center
        - padding: 0px 6px
        - font-weight: bold
        - font-size: 14px
      grid:
        - grid-template-areas: '"i l"'
  
  chip_icon_double_state:
    template: chips
    variables:
      icon: "❔"
    triggers_update:
      - "[[[ variables.ulm_chip_icon_state_entity_1 ]]]"
      - "[[[ variables.ulm_chip_icon_state_entity_2 ]]]"
    show_icon: true
    show_label: true
    icon: "[[[ return variables.ulm_chip_icon_double_state_icon ? variables.ulm_chip_icon_double_state_icon : variables.icon ]]]"
    label: "[[[ return variables.ulm_chip_icon_double_state_entity_1 ? states[variables.ulm_chip_icon_double_state_entity_1].state + ' • ' + states[variables.ulm_chip_icon_double_state_entity_2].state : '' ]]]"
    styles:
      label:
        - justify-self: center
        - padding: 0px 6px
        - font-weight: bold
        - font-size: 14px
      grid:
        - grid-template-areas: '"i l"'
        
  chip_back:
    template: chips
    tap_action:
      action: navigate
      navigation_path: "[[[ return variables.ulm_chip_back_path; ]]]"
    show_icon: true
    icon: 'mdi:arrow-left'
    styles:
      grid:
        - grid-template-areas: '"i"'
  
  chip_presence_detection:
    template: chips
    triggers_update:
      - "[[[ variables.ulm_chip_presence_counter_residents ]]]"
      - "[[[ variables.ulm_chip_presence_counter_guests ]]]"
    label: |
      [[[
        var guests = states[variables.ulm_chip_presence_counter_guests].state ? ' / ' + states[variables.ulm_chip_presence_counter_guests].state : '';
        return '🏠 ' +  states[variables.ulm_chip_presence_counter_residents].state + guests;
      ]]]
  
  chip_power_consumption:
    template: chips
    triggers_update:
      - "[[[ variables.ulm_chip_electric_consumption ]]]"
    label: |
      [[[
        var amount = variables.ulm_chip_electric_price != '' ? true : false
  
        if (amount){
          return '⚡ ' +  states[variables.ulm_chip_electric_price].state + variables.ulm_currency;
        } else {
          return '⚡ ' +  states[variables.ulm_chip_electric_consumption].state;
        }
      ]]]
  
  ### TITLE ###
  card_title:
    tap_action:
      action: none
    show_icon: false
    show_label: true
    show_name: true
    styles:
      card:
        - background-color: rgba(0,0,0,0)
        - box-shadow: none
        - height: auto
        - width: auto
        - margin-top: 12px
        - margin-left: 24px
        - margin-bottom: 0px
      grid:
        - grid-template-areas: '"n" "l"'
        - grid-template-columns: 1fr
        - grid-template-rows: min-content min-content
      name:
        - justify-self: start
        - font-weight: bold
        - font-size: '1.5rem'
      label:
        - justify-self: start
        - font-weight: bold
        - font-size: '1rem'
        - opacity: '0.4'
  
  ### VERTICAL BUTTONS (fka SCENES) ###        
  vertical_buttons:
    show_label: true
    label: "[[[ return (entity.attributes.value )]]]"
    styles: 
      icon:
        - color: 'rgba(var(--color-theme),0.2)'
      label:
        - justify-self: center
        - align-self: start
        - font-weight: bolder
        - font-size: 12px
        - filter: opacity(40%)
      name:
        - margin-top: 10px
        - justify-self: center
        - font-weight: bold
        - font-size: 14px
      img_cell:
        - background-color: 'rgba(var(--color-theme),0.05)'
        - border-radius: 50%
        - place-self: center
        - width: 42px
        - height: 42px
      grid:
        - grid-template-areas: '"i" "n" "l"'
      card:
        - border-radius: var(--border-radius)
        - box-shadow: var(--box-shadow)
        - padding: 10px 0px 8px 0px
    size: 20px
        
  vertical_buttons_blue:
    template: vertical_buttons
    variables:
      state: "default"
    state:
      - operator: template
        value: "[[[ return states['input_select.localisation_thomas'].state == variables.state ]]]"
        styles:
          icon:
            - color: 'rgba(var(--color-blue),1)'
          label:
            - color: 'rgba(var(--color-blue-text),1)'
          name:
            - color: 'rgba(var(--color-blue-text),1)'
          img_cell:
            - background-color: 'rgba(var(--color-blue), 0.2)'
          card:
            - background-color: 'rgba(var(--color-background-blue), var(--opacity-bg))'
            
  vertical_buttons_green:
    variables:
      state: "default"
    template: 
      - vertical_buttons
    state:
      - operator: template
        value: "[[[ return states['input_select.localisation_thomas'].state == variables.state ]]]"
        styles:
          icon:
            - color: 'rgba(var(--color-green),1)'
          label:
            - color: 'rgba(var(--color-green-text),1)'
          name:
            - color: 'rgba(var(--color-green-text),1)'
          img_cell:
            - background-color: 'rgba(var(--color-green), 0.2)'
          card:
            - background-color: 'rgba(var(--color-background-green), var(--opacity-bg))'
  
  ### CARDS ###
  card_generic:
    template: 
      - icon_info_bg
      - ulm_language_variables
    label: >
      [[[
        var unit = entity.attributes.unit_of_measurement != null ? ' ' + entity.attributes.unit_of_measurement : ''
        if (entity.state == 'on') {
          return variables.ulm_on;
        } else if (entity.state == 'off') {
          return variables.ulm_off;
        } else if (entity.state == 'unavailable') {
          return variables.ulm_unavailable;
        } else if (entity.state == 'idle') {
          return variables.ulm_idle;
        } else if (entity.state == 'open') {
          return variables.ulm_open;
        } else if (entity.state == 'closed') {
          return variables.ulm_closed;
        } else {
          return entity.state + unit;
        }
      ]]]
    styles:
      icon:
        - color: 'rgba(var(--color-theme),0.9)'
      label:
        - align-self: end
        - justify-self: start
        - font-weight: bold
        - font-size: 14px
        - margin-left: 12px
        - filter: opacity(100%)
      name:
        - justify-self: start
        - align-self: start
        - font-weight: bolder
        - font-size: 12px
        - filter: opacity(40%)
        - margin-left: 12px
      grid:
        - grid-template-areas: '"i l" "i n"'
        - grid-template-columns: min-content auto
        - grid-template-rows: min-content min-content
  
  card_generic_swap:
    template: 
      - icon_info_bg
      - ulm_language_variables
    label: >
      [[[
        var unit = entity.attributes.unit_of_measurement != null ? ' ' + entity.attributes.unit_of_measurement : ''
        if (entity.state == 'on') {
          return variables.ulm_on;
        } else if (entity.state == 'off') {
          return variables.ulm_off;
        } else if (entity.state == 'unavailable') {
          return variables.ulm_unavailable;
        } else if (entity.state == 'idle') {
          return variables.ulm_idle;
        } else if (entity.state == 'open') {
          return variables.ulm_open;
        } else if (entity.state == 'closed') {
          return variables.ulm_closed;
        } else {
          return entity.state + unit;
        }
      ]]]
    styles:
      icon:
        - color: 'rgba(var(--color-theme),0.9)'
      label:
        - justify-self: start
        - align-self: start
        - font-weight: bolder
        - font-size: 12px
        - filter: opacity(40%)
        - margin-left: 12px
      name:
        - align-self: end
        - justify-self: start
        - font-weight: bold
        - font-size: 14px
        - margin-left: 12px
        - filter: opacity(100%)
      grid:
        - grid-template-areas: '"i n" "i l"'
        - grid-template-columns: min-content auto
        - grid-template-rows: min-content min-content
  
  card_light:
    template: 
      - icon_info_bg
      - yellow
      - ulm_language_variables
    tap_action:
      action: toggle
    hold_action:
      action: more-info
    label: >-
      [[[ 
        if (entity.state !='unavailable'){
          if (entity.state =='off'){
            return variables.ulm_off;  
          } else if (entity.state == 'on'){
            if (entity.attributes.brightness != null){
              var bri = Math.round(entity.attributes.brightness / 2.55);
              return (bri ? bri : '0') + '%';
            } else {
              return variables.ulm_on
            } 
          }
        } else {
          return variables.ulm_unavailable;
        }
      ]]]
  
  card_light_slider:
    variables:
      ulm_card_light_slider_name: "[[[ return entity.attributes.friendly_name ]]]"
    show_icon: false
    show_name: false
    show_label: false
    state:
      - operator: template
        value: "[[[ return entity.state == 'on' ]]]"
        styles:
          grid:
            - row-gap: 12px
          card:
            - background-color: 'rgba(var(--color-background-yellow),var(--opacity-bg))'
    styles:
      grid:
        - grid-template-areas: '"item1" "item2"'
        - grid-template-columns: 1fr
        - grid-template-rows: min-content min-content
      card:
        - border-radius: var(--border-radius)
        - box-shadow: var(--box-shadow)
        - padding: 12px
    custom_fields:
      item1:
        card:
          type: 'custom:button-card'
          template:
            - icon_info
            - light
          entity: "[[[ return entity.entity_id ]]]"
          name: "[[[ return variables.ulm_card_light_slider_name ]]]"
          styles:
            card:
              - box-shadow: none
              - border-radius: var(--border-radius) var(--border-radius) 0px 0px
              - padding: 0px
      item2:
        card:
          type: conditional
          conditions:
            - entity: "[[[ return entity.entity_id ]]]"
              state: 'on'
          card:
            type: 'custom:my-slider'
            entity: '[[[ return entity.entity_id ]]]'
            radius: 14px
            height: 42px
            mainSliderColor: rgba(var(--color-yellow),1)
            secondarySliderColor: rgba(var(--color-yellow),0.2)
            mainSliderColorOff: rgba(var(--color-theme),0.05)
            secondarySliderColorOff: rgba(var(--color-theme),0.05)
            thumbHorizontalPadding: '0px'
            thumbVerticalPadding: '0px'   
            thumbWidth: 0px
            card_mod:
            style: |
              ha-card {
                border-radius: 14px;
                box-shadow: none;
              }
  
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
  
  card_binary_sensor:
    template: 
      - icon_info_bg
      - blue
    name: "[[[ return entity.name != '' ? entity.name : entity.attribute.friendly_name ]]]"
    show_last_changed: true
  
  card_input_boolean:
    template: 
      - icon_info_bg
      - ulm_language_variables
      - blue
    name: "[[[ return entity.name != '' ? entity.name : entity.attribute.friendly_name ]]]"
    label: >
      [[[
        if (entity.state != 'unavailable'){
          if (entity.state == 'on'){
            return variables.ulm_on;
          } else {
            return variables.ulm_off;
          }
        } else {
          return variables.ulm_unavailable;
        }
      ]]]
  
  card_navigate:
    template: 
      - icon_only
      - blue_no_state
    tap_action:
      action: navigate
      navigation_path: "[[[ return variables.ulm_card_navigate_path; ]]]"
    label: "[[[ return variables.ulm_card_navigate_title; ]]]"
    icon: "[[[ return variables.ulm_card_navigate_icon; ]]]"
    styles:
      icon:
        - color: 'rgba(var(--color-blue),0.7)'
      label:
        - align-self: center
        - justify-self: start
        - font-weight: bold
        - font-size: 14px
        - margin-left: 12px
        - filter: opacity(100%)
      img_cell:
        - background-color: 'rgba(var(--color-blue), 0.2)'
      grid:
        - grid-template-areas: '"i l"'
        - grid-template-columns: min-content min-content
        - grid-template-rows: min-content
  
  card_media_player:
    template:
      - icon_info_bg
      - ulm_language_variables
    icon: |
      [[[
        if(entity.attributes.app_name){
          var app = entity.attributes.app_name.toLowerCase();
          if(app == 'spotify'){
            var icon = 'mdi:spotify';
          } else if(app == 'google podcasts'){
            var icon = 'mdi:google-podcast';
          } else if(app == 'plex'){
            var icon = 'mdi:plex';
          } else if(app == 'soundcloud'){
            var icon = 'mdi:soundcloud';
          } else if(app == 'youtube music'){
            var icon = 'mdi:youtube';
          } else if (app == 'oto music'){
            var icon = 'mdi:music-circle';
          }
        }
        return icon;
      ]]]
    label: |
      [[[ 
          if (entity.state == 'off'){
            return variables.ulm_off;
          } else {
            return variables.ulm_on;
          }
      ]]]
    state:
      - operator: template
        value: "[[[ return entity.state != 'off' ]]]"
        name: "[[[ return states[entity.entity_id].attributes.media_title; ]]]"
        label: |
          [[[ 
            var label = variables.ulm_on;
            if(states[entity.entity_id].attributes.media_album_name){
              var label = states[entity.entity_id].attributes.media_album_name;
            }
            return label;
          ]]]
  
  card_media_player_with_control:
    template:
      - icon_info_bg
      - ulm_language_variables
    icon: |
      [[[
          var icon = 'mdi:speaker';
          if(entity.attributes.app_name){
            var app = entity.attributes.app_name.toLowerCase();
            if(app == 'spotify'){
              var icon = 'mdi:spotify';
            } else if(app == 'google podcasts'){
              var icon = 'mdi:google-podcast';
            } else if(app == 'plex'){
              var icon = 'mdi:plex';
            } else if(app == 'soundcloud'){
              var icon = 'mdi:soundcloud';
            } else if(app == 'youtube music'){
              var icon = 'mdi:youtube';
            } else if (app == 'oto music'){
              var icon = 'mdi:music-circle';
            }
          }
          return icon;
      ]]]
    label: |
      [[[ 
          if (entity.state == 'off'){
            return variables.ulm_off;
          } else {
            return variables.ulm_on;
          }
      ]]]
    state:
      - operator: template
        value: "[[[ return entity.state != 'off' ]]]"
        name: "[[[ return states[entity.entity_id].attributes.media_title; ]]]"
        label: |
          [[[ 
              var label = variables.ulm_on;
              if(states[entity.entity_id].attributes.media_album_name){
                var label = states[entity.entity_id].attributes.media_album_name;
              }
              return label;
          ]]]
        styles:
          label: 
            - color: white
            - filter: opacity(100%)
          img_cell:
            - background-color: 'rgba(var(--color-theme),0.0)'
          icon:
            - color: white
          name:
            - color: white
    styles:
      label:
        - opacity: '0.6'
      icon:
        - color: 'rgba(var(--color-theme),0.2)'
      img_cell:
        - background-color: 'rgba(var(--color-theme),0.05)'
      card:
        - background-blend-mode: multiply
        - background: "[[[ return states[entity.entity_id].attributes.entity_picture != null ? 'center / cover url(' + states[entity.entity_id].attributes.entity_picture + ') rgba(0, 0, 0, 0.15)' : '' ]]]"
  
  card_battery:
    template: card_generic
    icon: |
      [[[
          var battery = variables.ulm_card_battery_attribute != null ? states[entity.entity_id].attributes. + variables.ulm_card_battery_attribute : entity.state;
          var icon = 'mdi:help-circle-outline';
          if (battery >= 90){
            var icon = 'mdi:battery';
          } else if(battery >= 80){
            var icon = 'mdi:battery-90';
          } else if(battery >= 70){
            var icon = 'mdi:battery-80️';
          } else if(battery >= 60){
            var icon = 'mdi:battery-70️';
          } else if(battery >= 50){
            var icon = 'mdi:battery-60️';
          } else if(battery >= 40){
            var icon = 'mdi:battery-50️';
          } else if(battery >= 30){
            var icon = 'mdi:battery-40️';
          } else if(battery >= 20){
            var icon = 'mdi:battery-30️';
          } else if(battery >= 10){
            var icon = 'mdi:battery-20️';
          } else if(battery >= 0){
            var icon = 'mdi:battery-10️';
          } else if(battery == 0){
            var icon = 'mdi:battery-outline️';
          }
           return icon;
      ]]]
  
  card_person:
    template: icon_info_bg
    variables:
      ulm_card_person_use_entity_picture: false
      ulm_card_person_zone1: ''
      ulm_card_person_zone2: ''
    tap_action:
      action: more-info
    show_label: true
    show_name: true
    label: "[[[ return states[variables.ulm_card_person_entity].state ]]]"
    name: "[[[ return states[variables.ulm_card_person_entity].attributes.friendly_name ]]]"
    entity: "[[[ return variables.ulm_card_person_entity; ]]]"
    icon: 'mdi:face-man'
    show_entity_picture: "[[[ return variables.ulm_card_person_use_entity_picture ]]]"
    entity_picture: "[[[ return variables.ulm_card_person_use_entity_picture != false ? states[variables.ulm_card_person_entity].attributes.entity_picture : null ]]]"
    styles:
      icon:
        - color: 'rgba(var(--color-theme),0.9)'
        - width: >
            [[[ 
              if (variables.ulm_card_person_use_entity_picture != true){
                return '20px';
              } else {
                return '42px';
              }
            ]]]
        - place-self: >
            [[[ 
              if (variables.ulm_card_person_use_entity_picture != true){
                return 'center';
              } else {
                return 'stretch stretch';
              }
            ]]]
      custom_fields:
        notification:
          - border-radius: 50%
          - position: absolute
          - left: 38px
          - top: 8px
          - height: 16px
          - width: 16px
          - border: 2px solid var(--card-background-color)
          - font-size: 12px
          - line-height: 14px
          - background-color: >
              [[[
                if (states[variables.ulm_card_person_entity].state != 'home'){
                  return "rgba(var(--color-green),1)";
                } else {
                  return "rgba(var(--color-blue),1)";
                }
              ]]]
    custom_fields:
      notification: >
        [[[
          if (states[variables.ulm_card_person_entity].state != 'home'){
            if (states[variables.ulm_card_person_entity].state == variables.ulm_card_person_zone1){
              var icon = states[variables.ulm_card_person_zone1].attributes.icon != null ? states[variables.ulm_card_person_zone1].attributes.icon : 'mdi:help-circle'
              return '<ha-icon icon="' + icon + '" style="width: 10px; height: 10px; color: var(--primary-background-color);"></ha-icon>';
            } else if (states[variables.ulm_card_person_entity].state == variables.ulm_card_person_zone2){
              var icon = states[variables.ulm_card_person_zone2].attributes.icon != null ? states[variables.ulm_card_person_zone2].attributes.icon : 'mdi:help-circle'
              return '<ha-icon icon="' + icon + '" style="width: 10px; height: 10px; color: var(--primary-background-color);"></ha-icon>';
            } else {
              return '<ha-icon icon="mdi:home-minus" style="width: 10px; height: 10px; color: var(--primary-background-color);"></ha-icon>';
            }
          } else {
            return '<ha-icon icon="mdi:home-variant" style="width: 10px; height: 10px; color: var(--primary-background-color);"></ha-icon>';
          }
        ]]]
  
  ### 2-LINE CARDS ###
  card_cover_with_buttons:
    variables:
      ulm_card_cover_with_buttons_name: "n/a"
    triggers_update:
      - "[[[ variables.ulm_card_cover_with_buttons_entity ]]]"
    styles:
      grid:
        - grid-template-areas: '"item1" "item2"'
        - grid-template-columns: 1fr
        - grid-template-rows: min-content  min-content
        - row-gap: 12px
      card:
        - border-radius: var(--border-radius)
        - box-shadow: var(--box-shadow)
        - padding: 12px
    custom_fields:
      item1:
        card:
          type: 'custom:button-card'
          template:
            - icon_info
            - ulm_language_variables
            - cover
          tap_action:
            action: more-info
          entity: '[[[ return variables.ulm_card_cover_with_buttons_entity ]]]'
          name: '[[[ return variables.ulm_card_cover_with_buttons_name ]]]'
      item2:
        card:
          type: 'custom:button-card'
          template: list_items
          custom_fields:
            item1:
              card:
                type: 'custom:button-card'
                template: widget_icon
                tap_action:
                  action: call-service
                  service: cover.close_cover
                  service_data:
                    entity_id: '[[[ return variables.ulm_card_cover_with_buttons_entity ]]]'
                icon: 'mdi:arrow-down'
            item2:
              card:
                type: 'custom:button-card'
                template: widget_icon
                tap_action:
                  action: call-service
                  service: cover.stop_cover
                  service_data:
                    entity_id: '[[[ return variables.ulm_card_cover_with_buttons_entity ]]]'
                icon: 'mdi:pause'
            item3:
              card:
                type: 'custom:button-card'
                template: widget_icon
                tap_action:
                  action: call-service
                  service: cover.open_cover
                  service_data:
                    entity_id: '[[[ return variables.ulm_card_cover_with_buttons_entity ]]]'
                icon: 'mdi:arrow-up'
  
  card_graph:
    variables:
      ulm_card_graph_color: "var(--info-color)"
      ulm_card_graph_name: "n/a"
    triggers_update:
      - "[[[ variables.ulm_card_graph_entity ]]]"
    styles:
      grid:
        - grid-template-areas: '"item1" "item2"'
        - grid-template-columns: 1fr
        - grid-template-rows: min-content  min-content
      card:
        - border-radius: var(--border-radius)
        - box-shadow: var(--box-shadow)
        - padding: 0px
    custom_fields:
      item1:
        card:
          type: 'custom:button-card'
          template: 
            - icon_info
            - card_generic
          styles:
            card:
              - box-shadow: none
              - border-radius: var(--border-radius) var(--border-radius) 0px 0px
              - padding: 12px
          entity: '[[[ return variables.ulm_card_graph_entity ]]]'
          name: '[[[ return variables.ulm_card_graph_name ]]]'
      item2:
        card:
          type: 'custom:mini-graph-card'
          entities:
            - entity: '[[[ return variables.ulm_card_graph_entity ]]]'
          line_color: '[[[ return variables.ulm_card_graph_color ]]]'
          show:
            name: false
            icon: false
            legend: false
            state: false
          style: |
            ha-card {
              box-shadow: none;
              border-radius: var(--border-radius);
            }
  
  card_media_player_with_controls:
    variables:
      ulm_card_media_player_with_controls_name: "No name set"
    triggers_update:
      - "[[[ ulm_card_media_player_with_controls_entity ]]]"
    styles:
      grid:
        - grid-template-areas: '"item1" "item2"'
        - grid-template-columns: 1fr
        - grid-template-rows: min-content  min-content
        - row-gap: 12px
      card:
        - border-radius: var(--border-radius)
        - box-shadow: var(--box-shadow)
        - padding: 12px
    custom_fields:
      item1:
        card:
          type: 'custom:button-card'
          template:
            - ulm_language_variables
            - card_media_player
          tap_action:
            action: more-info
          entity: '[[[ return variables.ulm_card_media_player_with_controls_entity ]]]'
          name: '[[[ return variables.ulm_card_media_player_with_controls_name ]]]'
          styles:
            card:
              - box-shadow: none
              - padding: 0px
      item2:
        card:
          type: 'custom:button-card'
          template: list_items
          custom_fields:
            item1:
              card:
                type: 'custom:button-card'
                template: widget_icon
                tap_action:
                  action: call-service
                  service: media_player.media_previous_track
                  service_data:
                    entity_id: '[[[ return variables.ulm_card_media_player_with_controls_entity ]]]'
                icon: 'mdi:skip-previous'
            item2:
              card:
                type: 'custom:button-card'
                template: widget_icon
                entity: '[[[ return variables.ulm_card_media_player_with_controls_entity ]]]'
                tap_action:
                  action: call-service
                  service: media_player.media_play_pause
                  service_data:
                    entity_id: '[[[ return variables.ulm_card_media_player_with_controls_entity ]]]'
                icon: 'mdi:pause'
                state:
                  - value: paused
                    icon: 'mdi:play'
                  - value: 'off'
                    icon: 'mdi:play'
            item3:
              card:
                type: 'custom:button-card'
                template: widget_icon
                tap_action:
                  action: call-service
                  service: media_player.media_next_track
                  service_data:
                    entity_id: '[[[ return entity.ulm_card_media_player_with_controls_entity ]]]'
                icon: 'mdi:skip-next'
  
  ### INTERNAL TEMPLATES ###
  blue:
    state:
      - styles:
          icon:
            - color: 'rgba(var(--color-blue),1)'
          label:
            - color: 'rgba(var(--color-blue-text),1)'
          name:
            - color: 'rgba(var(--color-blue-text),1)'
          img_cell:
            - background-color: 'rgba(var(--color-blue), 0.2)'
          card:
            - background-color: 'rgba(var(--color-background-blue), var(--opacity-bg))'
        value: 'on'
  
  blue_no_state:
    styles:
      icon:
        - color: 'rgba(var(--color-blue),1)'
      label:
        - color: 'rgba(var(--color-blue-text),1)'
      name:
        - color: 'rgba(var(--color-blue-text),1)'
      img_cell:
        - background-color: 'rgba(var(--color-blue), 0.2)'
      card:
        - background-color: 'rgba(var(--color-background-blue), var(--opacity-bg))'
  
  chips:
    tap_action:
      action: more-info
    show_icon: false
    show_label: true
    show_name: false
    show_state: false
    styles:
      label:
        - justify-self: center
        - padding: 0px 6px
        - font-weight: bold
        - font-size: 14px
      img_cell:
        - width: 24px
      grid:
        - grid-template-areas: '"l"'
      card:
        - border-radius: 18px
        - box-shadow: var(--box-shadow)
        - height: 36px
        - width: auto
        - padding-left: 6px
        - padding-right: 6px
    size: 80%
  
  cover:
    tap_action:
      action: more-info
    icon: |
      [[[
          var icon = 'mdi:window-shutter';
          if (states[entity.entity_id].attributes.current_position == 0){
            var icon = 'mdi:window-shutter';
          } else
            var icon = 'mdi:window-shutter-open';
          return icon ;
      ]]]
    label: >-
      [[[ 
          if (states[entity.entity_id].attributes.current_position == 0){
            return variables.ulm_closed;
          } else {
            return variables.ulm_open + ' • ' + (states[entity.entity_id].attributes.current_position) + '%' ;
          }
      ]]]
    state:
      - operator: template
        value: "[[[ return states[entity.entity_id].attributes.current_position != 0; ]]]"
        styles:
          icon:
            - color: 'rgba(var(--color-blue),1)'
          img_cell:
            - background-color: 'rgba(var(--color-blue),0.2)'
  
  edge:
    styles:
      card:
        - width: 0px
  
  icon:
    color: var(--google-grey)
    show_icon: true
    show_label: false
    show_name: false
    state:
      - styles:
          custom_fields:
            notification:
              - border-radius: 50%
              - position: absolute
              - left: 24px
              - top: -2px
              - height: 16px
              - width: 16px
              - border: 2px solid var(--card-background-color)
              - font-size: 12px
              - line-height: 14px
              - background-color: >
                  [[[
                    return "rgba(var(--color-red),1)";
                  ]]]
        value: unavailable
    styles:
      icon:
        - color: 'rgba(var(--color-theme),0.2)'
      img_cell:
        - background-color: 'rgba(var(--color-theme),0.05)'
        - border-radius: 50%
        - place-self: center
        - width: 42px
        - height: 42px
      grid:
        - grid-template-areas: '"i"'
        - grid-template-columns: min-content
        - grid-template-rows: min-content
      card:
        - border-radius: 21px
        - box-shadow: none
        - padding: 0px
    custom_fields:
      notification: >
        [[[
          if (entity.state =='unavailable'){
            return '<ha-icon icon="mdi:exclamation" style="width: 12px; height: 12px; color: var(--primary-background-color);"></ha-icon>'
          }
        ]]]
    size: 20px
  
  icon_only:
    color: var(--google-grey)
    show_icon: true
    show_label: true
    show_name: false
    styles:
      icon:
        - color: 'rgba(var(--color-theme),0.2)'
      label:
        - justify-self: start
        - align-self: start
        - font-weight: bold
        - font-size: 12px
        - filter: opacity(40%)
        - margin-left: 12px
      img_cell:
        - background-color: 'rgba(var(--color-theme),0.05)'
        - border-radius: 50%
        - place-self: center
        - width: 42px
        - height: 42px
      grid:
        - grid-template-areas: '"i l"'
        - grid-template-columns: min-content auto
        - grid-template-rows: min-content
      card:
        - border-radius: var(--border-radius)
        - box-shadow: var(--box-shadow)
        - padding: 12px
    size: 20px
  
  icon_info:
    color: var(--google-grey)
    show_icon: true
    show_label: true
    show_name: true
    state:
      - styles:
          custom_fields:
            notification:
              - border-radius: 50%
              - position: absolute
              - left: 24px
              - top: -2px
              - height: 16px
              - width: 16px
              - border: 2px solid var(--card-background-color)
              - font-size: 12px
              - line-height: 14px
              - background-color: >
                  [[[
                    return "rgba(var(--color-red),1)";
                  ]]]
        value: unavailable
    styles:
      icon:
        - color: 'rgba(var(--color-theme),0.2)'
      label:
        - justify-self: start
        - align-self: start
        - font-weight: bolder
        - font-size: 12px
        - filter: opacity(40%)
        - margin-left: 12px
      name:
        - align-self: end
        - justify-self: start
        - font-weight: bold
        - font-size: 14px
        - margin-left: 12px
      state:
        - justify-self: start
        - align-self: start
        - font-weight: bolder
        - font-size: 12px
        - filter: opacity(40%)
        - margin-left: 12px
      img_cell:
        - background-color: 'rgba(var(--color-theme),0.05)'
        - border-radius: 50%
        - place-self: center
        - width: 42px
        - height: 42px
      grid:
        - grid-template-areas: '"i n" "i l"'
        - grid-template-columns: min-content auto
        - grid-template-rows: min-content min-content
      card:
        - border-radius: 21px 8px 8px 21px 
        - box-shadow: none
        - padding: 0px
        # - background-color: 'rgba(var(--color-theme),0)'
    custom_fields:
      notification: >
        [[[
          if (entity.state =='unavailable'){
            return '<ha-icon icon="mdi:exclamation" style="width: 12px; height: 12px; color: var(--primary-background-color);"></ha-icon>'
          }
        ]]]
    size: 20px
  
  icon_info_bg:
    color: var(--google-grey)
    show_icon: true
    show_label: true
    show_name: true
    state:
      - styles:
          custom_fields:
            notification:
              - border-radius: 50%
              - position: absolute
              - left: 38px
              - top: 8px
              - height: 16px
              - width: 16px
              - border: 2px solid var(--card-background-color)
              - font-size: 12px
              - line-height: 14px
              - background-color: >
                  [[[
                    return "rgba(var(--color-red),1)";
                  ]]]
        value: unavailable
    styles:
      icon:
        - color: 'rgba(var(--color-theme),0.2)'
      label:
        - justify-self: start
        - align-self: start
        - font-weight: bold
        - font-size: 12px
        - filter: opacity(40%)
        - margin-left: 12px
      name:
        - align-self: end
        - justify-self: start
        - font-weight: bold
        - font-size: 14px
        - margin-left: 12px
      state:
        - justify-self: start
        - align-self: start
        - font-weight: bold
        - font-size: 12px
        - filter: opacity(40%)
        - margin-left: 12px
      img_cell:
        - background-color: 'rgba(var(--color-theme),0.05)'
        - border-radius: 50%
        - place-self: center
        - width: 42px
        - height: 42px
      grid:
        - grid-template-areas: '"i n" "i l"'
        - grid-template-columns: min-content auto
        - grid-template-rows: min-content min-content
      card:
        - border-radius: var(--border-radius)
        - box-shadow: var(--box-shadow)
        - padding: 12px
    custom_fields:
      notification: >
        [[[
          if (entity.state =='unavailable'){
            return '<ha-icon icon="mdi:exclamation" style="width: 12px; height: 12px; color: var(--primary-background-color);"></ha-icon>'
          }
        ]]]
    size: 20px
  
  icon_info_line:
    show_icon: true
    show_label: true
    show_name: false
    styles:
      icon:
        - filter: opacity(40%)
      label:
        - padding: 2px
        - justify-self: start
        - align-self: center
        - font-weight: bolder
        - font-size: 12px
        - margin-left: 0px
        - filter: opacity(40%)
      img_cell:
        - place-self: center
        - width: 14px
        - height: 24px
      grid:
        - grid-template-areas: '"i l"'
        - grid-template-columns: max_content auto
        - grid-template-rows: min-content
      card:
        - box-shadow: none
        - padding: 0px
    size: 100%
  
  list_items:
    styles:
      grid:
        - grid-template-areas: '"item1 item2 item3"'
        - grid-template-columns: 1fr 1fr 1fr
        - grid-template-rows: min-content
        - column-gap: 7px
      card:
        - box-shadow: none
        - padding: 0px
  
  list_items_line:
    styles:
      grid:
        - grid-template-areas: '"item1 item2 item3"'
        - grid-template-columns: max-content max-content max-content
        - grid-template-rows: min-content
        - column-gap: 8px
      card:
        - box-shadow: none
        - padding: 0px
  
  widget_icon:
    tap_action:
      action: toggle
    show_icon: true
    show_name: false
    styles:
      grid:
        - grid-template-areas: '"i"'
      card:
        - box-shadow: none
        - padding: 0px
        - background-color: 'rgba(var(--color-theme),0.05)'
        - border-radius: 14px
        - place-self: center
        - height: 42px
      icon:
        - color: 'rgba(var(--color-theme),0.9)'
    size: 20px
    color: var(--google-grey)
  
  yellow:
    state:
      - styles:
          icon:
            - color: 'rgba(var(--color-yellow),1)'
          label:
            - color: 'rgba(var(--color-yellow-text),1)'
          name:
            - color: 'rgba(var(--color-yellow-text),1)'
          img_cell:
            - background-color: 'rgba(var(--color-yellow), 0.2)'
          card:
            - background-color: 'rgba(var(--color-background-yellow),var(--opacity-bg))'
        value: 'on'
  
  ### LEGACY TEMPLATES ###
  ###### CHIPS ###
  chips_icon:
    template: chip_icon_state
    variables:
      ulm_chip_icon_state_icon: "[[[ return variables.icon ]]]"
      ulm_chip_icon_state_entity: "[[[ return entity.entity_id ]]]"
  chips_return:
    template: chip_back
    variables:
      ulm_chip_back_path: /ui-lovelace-minimalist/home
  chips_localisation_present:
    template: chip_presence_detection
  ###### TITLE ###
  title:
    template: card_title
  ###### CARDS ###
  generic:
    template: card_generic
  light:
    template: card_light
  light_slider:
    template: card_light_slider
    variables:
      ulm_card_light_slider_name: "[[[ return variables.name ]]]"
  binary_sensor:
    template: card_binary_sensor
  outlet:
    template: card_power_outlet
  #thermostat:
  #  template: card_thermostat
  cover_buttons:
    template: card_cover_with_buttons
    variables:
      ulm_card_cover_with_buttons_name: 
      ulm_card_cover_with_buttons_entity:
  graph:
    template: card_graph
    variables:
      ulm_card_graph_color: var(--google-blue)
      ulm_card_graph_name: "Default name"
      ulm_card_graph_entity: "[[[ return entity.entity_id ]]]"
  media:
    template: card_media_player
  battery:
    template: card_battery
    variables:
      ulm_card_battery_attribute: battery
  media_mini_album:
    template: card_media_player_with_cover
  media_buttons:
    template: card_media_player_with_controls
    variables:
      ulm_card_media_player_with_controls_entity: "[[[ return variables.entity ]]]"
      ulm_card_media_player_with_controls_name: "[[[ return variables.name ]]]"
  ### SCENES ###
  scene:
    template: vertical_buttons
  scene_blue:
    template: vertical_buttons_blue
  scene_green:
    template: vertical_buttons_green
`;

  var en = `  ulm_language_variables:
    variables:
      ulm_on: "on"
      ulm_off: "off"
      ulm_open: "open"
      ulm_closed: "closed"
      ulm_unavailable: "unavailable"
      ulm_standby: "standby"
      ulm_idle: "idle"
      ulm_currency: "$"
`;

  var de = `  ulm_language_variables:
    variables:
      ulm_on: "an"
      ulm_off: "aus"
      ulm_open: "offen"
      ulm_closed: "geschlossen"
      ulm_unavailable: "nicht verfügbar"
      ulm_standby: "standby"
      ulm_idle: "im Leerlauf"
      ulm_currency: "€"
`;

  var fr = `  ulm_language_variables:
    variables:
      ulm_on: "On"
      ulm_off: "Off"
      ulm_open: "Ouvert"
      ulm_closed: "Fermé"
      ulm_unavailable: "Indisponible"
      ulm_standby: "Veille"
      ulm_idle: "Inactif"
      ulm_currency: "€"
`;

  var cardAircondition = `  custom_card_tpx01_aircondition:
    template:
      - ulm_language_variables
      - custom_card_tpx01_aircondition_language_variables
    tap_action:
      action: more-info
    icon: |
      [[[
          if (entity.state =='dry') {
            return 'mdi:water';
          } else if (entity.state =='heat') {
            return 'mdi:radiator';
          } else if (entity.state =='cool') {
            return 'mdi:snowflake';
          } else if (entity.state =='fan_only') {
            return 'mdi:fan';
          }
          return 'mdi:air-conditioner';
      ]]]
    label: >-
      [[[
          if (entity.state =='off') {
            return variables.ulm_off;
          } else if (entity.state =='dry') {
            return variables.custom_card_tpx01_aircondition_dry;
          } else if (entity.state =='heat') {
            return variables.custom_card_tpx01_aircondition_heat;
          } else if (entity.state =='heat_cool') {
            return variables.custom_card_tpx01_aircondition_heat_cool;
          } else if (entity.state =='cool') {
            return variables.custom_card_tpx01_aircondition_cool;
          } else if (entity.state =='fan_only') {
            return variables.custom_card_tpx01_aircondition_fan_only;
          }
          return entity.state;
      ]]]
    state:
      - operator: template
        value: >
          [[[
            return entity.state != 'off';
          ]]]
        styles:
          icon:
            - color: 'rgba(var(--color-blue),1)'
          img_cell:
            - background-color: 'rgba(var(--color-blue),0.2)'
  
  custom_card_tpx01_aircondition_with_buttons:
    variables:
      name: null
    styles:
      grid:
        - grid-template-areas: '"item1" "item2"'
        - grid-template-columns: 1fr
        - grid-template-rows: min-content  min-content
        - row-gap: 12px
      card:
        - border-radius: var(--border-radius)
        - box-shadow: var(--box-shadow)
        - padding: 12px
    custom_fields:
      item1:
        card:
          type: custom:button-card
          template: list_items_favorite
          custom_fields:
            item1:
              card:
                type: 'custom:button-card'
                template:
                  - icon_info
                  - custom_card_tpx01_aircondition
                tap_action:
                  action: more-info
                name: >
                  [[[
                      if (variables.name == null) {
                        return variables.entity;
                      }
                      return variables.name;
                  ]]]
                entity: '[[[ return variables.entity ]]]'
            item2:
              card:
                type: horizontal-stack
                cards:
                  - type: conditional
                    conditions:
                      - entity: '[[[ return variables.entity ]]]'
                        state: 'off'
                    card:
                      type: custom:button-card
                      template: widget_icon
                      tap_action:
                        action: call-service
                        service: climate.set_hvac_mode
                        service_data:
                          entity_id: '[[[ return variables.entity ]]]'
                          hvac_mode: 'cool'
                      icon: mdi:power
                  - type: conditional
                    conditions:
                      - entity: '[[[ return variables.entity ]]]'
                        state_not: 'off'
                    card:
                      type: custom:button-card
                      template: widget_icon
                      tap_action:
                        action: call-service
                        service: climate.set_hvac_mode
                        service_data:
                          entity_id: '[[[ return variables.entity ]]]'
                          hvac_mode: 'off'
                      icon: mdi:power-off
      item2:
        card:
          type: 'custom:button-card'
          template: list_items
          custom_fields:
            item1:
              card:
                type: 'custom:button-card'
                template: widget_icon
                tap_action:
                  action: call-service
                  service: script.decrease_climate_temperature
                  service_data:
                    entity_id: '[[[ return variables.entity ]]]'
                icon: 'mdi:minus'
            item2:
              card:
                type: 'custom:button-card'
                template: widget_temperature
                tap_action:
                  action: none
                entity: '[[[ return variables.entity ]]]'
                icon: 'mdi:temperature-celsius'
            item3:
              card:
                type: 'custom:button-card'
                template: widget_icon
                tap_action:
                  action: call-service
                  service: script.increment_climate_temperature
                  service_data:
                    entity_id: '[[[ return variables.entity ]]]'
                icon: 'mdi:plus'
  
  list_items_favorite:
    styles:
      grid:
        - grid-template-areas: '"item1 item1 item2"'
        - grid-template-columns: 1fr 1fr 1fr
        - grid-template-rows: min-content
        - column-gap: 7px
      card:
        - box-shadow: none
        - padding: 0px
  
  widget_temperature:
    tap_action:
      action: toggle
    color: var(--google-grey-500)
    show_icon: false
    show_name: false
    show_label: true
    size: 20px
    label: |-
      [[[
          var temperature = entity.attributes.temperature;
          if (temperature == null) {
            var temperature = '-';
          }
          return temperature + '°C'
      ]]]
    styles:
      label:
        - color: 'rgb(var(--color-theme),0.9)'
      grid:
        - grid-template-areas: '"l"'
      card:
        - box-shadow: none
        - padding: 0px
        - background-color: 'rgba(var(--couleur-theme),0)'
        - border-radius: 14px
        - place-self: center
        - height: 42px  
`;
  var cardAircondition_en = `  custom_card_tpx01_aircondition_language_variables:
    variables:
      custom_card_tpx01_aircondition_dry: 'dry'
      custom_card_tpx01_aircondition_heat: 'heat'
      custom_card_tpx01_aircondition_heat_cool: 'auto'
      custom_card_tpx01_aircondition_cool: 'cool'
      custom_card_tpx01_aircondition_fan_only: 'fan only'
`;
  var cardAircondition_de = `  custom_card_tpx01_aircondition_language_variables:
    variables:
      custom_card_tpx01_aircondition_dry: 'entfeuchten'
      custom_card_tpx01_aircondition_heat: 'heizen'
      custom_card_tpx01_aircondition_heat_cool: 'automatisch'
      custom_card_tpx01_aircondition_cool: 'kühlen'
      custom_card_tpx01_aircondition_fan_only: 'ventilator'
`;
  var cardAircondition_fr = `  custom_card_tpx01_aircondition_language_variables:
    variables:
      custom_card_tpx01_aircondition_dry: 'déshumidifier'
      custom_card_tpx01_aircondition_heat: 'chaleur'
      custom_card_tpx01_aircondition_heat_cool: 'auto'
      custom_card_tpx01_aircondition_cool: 'frais'
      custom_card_tpx01_aircondition_fan_only: 'fan seulement'
`;

  var cardDwdPollen = `  custom_card_paddy_dwd_pollen:
    template:
      - card_generic_swap
      - custom_card_paddy_dwd_pollen_language_variables
    label: >
      [[[
        if (entity.state == "6"){
          return variables.custom_card_paddy_dwd_pollen_6;
        } else if (entity.state == "5"){
          return variables.custom_card_paddy_dwd_pollen_5;
        } else if (entity.state == "4"){
          return variables.custom_card_paddy_dwd_pollen_4;
        } else if (entity.state == "3"){
          return variables.custom_card_paddy_dwd_pollen_3;
        } else if (entity.state == "2"){
          return variables.custom_card_paddy_dwd_pollen_2;
        } else if (entity.state == "1"){
          return variables.custom_card_paddy_dwd_pollen_1;
        }
        return variables.custom_card_paddy_dwd_pollen_none;
      ]]]
    state:
      - value: '6'
        styles:
          img_cell:
            - background-color: 'rgba(190,0,33,1)'
      - value: '5'
        styles:
          img_cell:
            - background-color: 'rgba(240,56,26,1)'
      - value: '4'
        styles:
          img_cell:
            - background-color: 'rgba(254,154,36,1)'
      - value: '3'
        styles:
          img_cell:
            - background-color: 'rgba(254,197,77,1)'
      - value: '2'
        styles:
          img_cell:
            - background-color: 'rgba(254,228,156,1)'
      - value: '1'
        styles:
          img_cell:
            - background-color: 'rgba(219,250,200,1)'
      - value: '0'
        styles:
          icon:
            - color: 'rgba(var(--color-theme),0.2)'
`;
  var cardDwdPollen_de = `  custom_card_paddy_dwd_pollen_language_variables:
    variables:
      custom_card_paddy_dwd_pollen_6: "hoch"
      custom_card_paddy_dwd_pollen_5: "mittel bis hoch"
      custom_card_paddy_dwd_pollen_4: "mittel"
      custom_card_paddy_dwd_pollen_3: "gering bis mittel"
      custom_card_paddy_dwd_pollen_2: "gering"
      custom_card_paddy_dwd_pollen_1: "keine bis gering"
      custom_card_paddy_dwd_pollen_none: "keine"
`;

  var cardFlower = `  list_1_item:
    styles:
      card:
        - box-shadow: none
        - padding: 0px
      grid:
        - grid-template-areas: '"item1"'
        - grid-template-columns: 1fr
        - grid-template-rows: min-content
        - column-gap: 7px
  
  flower:
    template:
      - ulm_language_variables
    tap_action:
      action: more-info
    icon: |
      [[[
          var icon = 'mdi:flower';
          if (entity.state == 'problem'){
            var icon = 'mdi:alert-circle';
          }
          return icon ;
      ]]]
    label: >-
      [[[ 
          if (entity.state == 'problem'){
            return variables.ulm_problem;
          }else{
            return variables.ulm_correct;
          }
      ]]]
    state:
      - operator: template
        value: >
          [[[
            return entity.state != 'on';
          ]]]
        styles:
          icon:
            - color: "rgba(var(--color-green),1)"
          img_cell:
            - background-color: "rgba(var(--color-green),0.2)"
  
  card_flower:
    variables:
      ulm_card_flower_name: "No name set"
    styles:
      card:
        - border-radius: 20px
        - box-shadow: var(--box-shadow)
        - padding: 12px
      grid:
        - grid-template-areas: '"item1" "item2"'
        - grid-template-columns: 1fr
        - grid-template-rows: min-content  min-content
        - row-gap: 6px
    custom_fields:
      item1:
        card:
          entity: "[[[ return variables.ulm_card_flower_entity ]]]"
          name: "[[[ return variables.ulm_card_flower_name ]]]"
          tap_action:
            action: more-info
          template:
            - icon_info
            - flower
          type: "custom:button-card"
      item2:
        card:
          template: list_1_item
          type: "custom:button-card"
          custom_fields:
            item1:
              card:
                type: custom:flower-card
                entity: "[[[ return variables.ulm_card_flower_entity ]]]"
                species: "[[[ return variables.ulm_card_flower_species ]]]"
                card_mod:
                  style: |
                    ha-card{
                      margin-top: 0px !important;
                      box-shadow: none !important;
                      --mdc-icon-size: 16px !important;
                    }
                    .header{
                      display: none !important;
                    }
                    .divider{
                      display: none !important;
                    }
                    .value{
                      display: none !important;
                    }
                    .attributes{
                      padding: 0px !important;
                    }
                    .attribute ha-icon {
                        margin-right: 0px !important;
                    }
`;
  var cardFlower_en = `  ulm_language_variables:
    variables:
      ulm_problem: "Problem"
      ulm_correct: "Correct"
`;
  var cardFlower_de = `  ulm_language_variables:
    variables:
      ulm_problem: "Problem"
      ulm_correct: "In Ordnung"
`;
  var cardFlower_fr = `  ulm_language_variables:
    variables:
      ulm_problem: "Problème"
      ulm_correct: "Correct"
`;

  var cardNas = 'cardNas';
  var cardNas_en = '';
  var cardNas_de = '';
  var cardNas_fr = '';

  var cardWasteCollection = `  custom_card_paddy_waste_collection:
    template:
      - card_generic_swap
    state:
      - operator: template
        value: "[[[ return states[entity.entity_id].attributes.daysTo == 0; ]]]"
        styles:
          img_cell:
            - background-color: 'rgba(var(--color-red),0.5)'
          icon:
            - color: 'rgba(var(--color-red),1)'
          custom_fields:
            notification:
              - border-radius: 50%
              - position: absolute
              - left: 38px
              - top: 8px
              - height: 16px
              - width: 16px
              - border: 2px solid var(--card-background-color)
              - font-size: 12px
              - line-height: 14px
              - background-color: >
                  [[[
                    return "rgba(var(--color-red),1)";
                  ]]]
      - operator: template
        value: "[[[ return states[entity.entity_id].attributes.daysTo == 1; ]]]"
        styles:
          img_cell:
            - background-color: 'rgba(var(--color-red),0.05)'
          icon:
            - color: 'rgba(var(--color-red),1)'
          custom_fields:
            notification:
              - border-radius: 50%
              - position: absolute
              - left: 38px
              - top: 8px
              - height: 16px
              - width: 16px
              - border: 2px solid var(--card-background-color)
              - font-size: 12px
              - line-height: 14px
              - background-color: >
                  [[[
                    return "rgba(var(--color-red),1)";
                  ]]]
      - value: 'unavailable'
        styles:
          custom_fields:
            notification:
              - border-radius: 50%
              - position: absolute
              - left: 38px
              - top: 8px
              - height: 16px
              - width: 16px
              - border: 2px solid var(--card-background-color)
              - font-size: 12px
              - line-height: 14px
              - background-color: >
                  [[[
                    return "rgba(var(--color-red),1)";
                  ]]]
    custom_fields:
      notification: >
        [[[
          if (entity.state == 'unavailable' || states[entity.entity_id].attributes.daysTo == 0 || states[entity.entity_id].attributes.daysTo == 1){
            return '<ha-icon icon="mdi:exclamation" style="width: 12px; height: 12px; color: var(--primary-background-color);"></ha-icon>'
          }
        ]]] 
`;

  var cardWelcome = `  custom_card_paddy_welcome:
    template:
      - ulm_custom_card_paddy_welcome_language_variables
    show_icon: false
    show_name: false
    show_label: false
    styles:
      grid:
        - grid-template-areas: '"item1"'
        - grid-template-columns: 1fr
        - grid-template-rows: min-content
        - row-gap: 12px
      card:
        - border-radius: var(--border-radius)
        - box-shadow: var(--box-shadow)
        - padding: 12px
    custom_fields:
      item1:
        card:
          type: markdown
          content: >
            [[[
              let time = states[variables.ulm_custom_card_paddy_welcome_time].state;
              let welcome = '';
  
              if (time > '18:00'){
                welcome = variables.ulm_custom_card_paddy_welcome_evening; 
              } else if (time > '12:00'){
                welcome = variables.ulm_custom_card_paddy_welcome_afternoon;
              } else if (time > '05:00'){
                welcome = variables.ulm_custom_card_paddy_welcome_morning;
              } else {
                welcome = variables.ulm_custom_card_paddy_welcome_hello;
              }
  
              return welcome + ',<br>' + user.name + '!';
            ]]]
          card_mod:
          style: |
            ha-card {
              border-radius: 14px;
              box-shadow: none;
              font-size: 30px;
              text-align: left;
              cursor: default;
            }
  
  custom_card_paddy_welcome_with_weather:
    template:
      - ulm_custom_card_paddy_welcome_language_variables
    show_icon: false
    show_name: false
    show_label: false
    styles:
      grid:
        - grid-template-areas: '"item1" "item2"'
        - grid-template-columns: 1fr
        - grid-template-rows: min-content min-content
        - row-gap: 12px
      card:
        - border-radius: var(--border-radius)
        - box-shadow: var(--box-shadow)
        - padding: 12px
    custom_fields:
      item1:
        card:
          type: markdown
          content: >
            [[[
              let time = states[variables.ulm_custom_card_paddy_welcome_time].state;
              let welcome = '';
  
              if (time > '18:00'){
                welcome = variables.ulm_custom_card_paddy_welcome_evening; 
              } else if (time > '12:00'){
                welcome = variables.ulm_custom_card_paddy_welcome_afternoon;
              } else if (time > '05:00'){
                welcome = variables.ulm_custom_card_paddy_welcome_morning;
              } else {
                welcome = variables.ulm_custom_card_paddy_welcome_hello;
              }
  
              return welcome + ',<br>' + user.name + '!';
            ]]]
          card_mod:
          style: |
            ha-card {
              border-radius: 14px;
              box-shadow: none;
              font-size: 30px;
              text-align: left;
              cursor: default;
            }
      item2:
        card:
          type: weather-forecast
          entity: "[[[ return variables.ulm_custom_card_paddy_welcome_weather_provider; ]]]"
          show_forecast: false
          card_mod:
          style: |
            ha-card.type-weather-forecast {
              border-radius: 14px;
              box-shadow: none;
            }
            ha-card.type-weather-forecast .state {
              text-align: left;
              font-size: 14px;
              font-weight: bolder;
            }
            ha-card.type-weather-forecast .name {
              text-align: left;
              font-size: 14px;
            }
            ha-card.type-weather-forecast .temp-attribute {
              text-align: right;
            }
            ha-card.type-weather-forecast .temp {
              text-align: right;
              font-size: medium;
              font-weight: bolder;
              margin-right: 16px;
            }
            ha-card.type-weather-forecast .temp span {
              text-align: right;
              font-size: medium;
              font-weight: bolder;
            }
            ha-card.type-weather-forecast .attribute {
              text-align: right;
              font-size: smaller;
            }
  
  custom_card_paddy_welcome_with_news:
    template:
      - ulm_custom_card_paddy_welcome_language_variables
    show_icon: false
    show_name: false
    show_label: false
    styles:
      grid:
        - grid-template-areas: '"item1" "item2"'
        - grid-template-columns: 1fr
        - grid-template-rows: min-content min-content
        - row-gap: 12px
      card:
        - border-radius: var(--border-radius)
        - box-shadow: var(--box-shadow)
        - padding: 12px
    custom_fields:
      item1:
        card:
          type: markdown
          content: >
            [[[
              let time = states[variables.ulm_custom_card_paddy_welcome_time].state;
              let welcome = '';
  
              if (time > '18:00'){
                welcome = variables.ulm_custom_card_paddy_welcome_evening; 
              } else if (time > '12:00'){
                welcome = variables.ulm_custom_card_paddy_welcome_afternoon;
              } else if (time > '05:00'){
                welcome = variables.ulm_custom_card_paddy_welcome_morning;
              } else {
                welcome = variables.ulm_custom_card_paddy_welcome_hello;
              }
  
              return welcome + ',<br>' + user.name + '!';
            ]]]
          card_mod:
          style: |
            ha-card {
              border-radius: 14px;
              box-shadow: none;
              font-size: 30px;
              text-align: left;
              cursor: default;
            }
      item2:
        card:
          type: 'custom:home-feed-card'
          card_id: main_feed
          show_empty: false
          more_info_on_tap: true
          state_color: false
          compact_mode: true
          max_item_count: 3
          show_icons: true 
          entities: >
            [[[
              return variables.ulm_custom_card_paddy_welcome_news_entities;
            ]]]
          card_mod:
          style: |
            ha-card {
              border-radius: 14px;
              box-shadow: none;
              font-size: 14px;
              text-align: left;
            }
`;
  var cardWelcome_en = `  ulm_custom_card_paddy_welcome_language_variables:
    variables:
      ulm_custom_card_paddy_welcome_morning: 'Good morning'
      ulm_custom_card_paddy_welcome_afternoon: 'Good afternoon'
      ulm_custom_card_paddy_welcome_evening: 'Good evening'
      ulm_custom_card_paddy_welcome_hello: 'Hello'
`;
  var cardWelcome_de = `  ulm_custom_card_paddy_welcome_language_variables:
    variables:
      ulm_custom_card_paddy_welcome_morning: 'Guten Morgen'
      ulm_custom_card_paddy_welcome_afternoon: 'Guten Tag'
      ulm_custom_card_paddy_welcome_evening: 'Guten Abend'
      ulm_custom_card_paddy_welcome_hello: 'Hallo'
`;
  var cardWelcome_fr = `  ulm_custom_card_paddy_welcome_language_variables:
    variables:
      ulm_custom_card_paddy_welcome_morning: 'Bon matin'
      ulm_custom_card_paddy_welcome_afternoon: 'Bonjour'
      ulm_custom_card_paddy_welcome_evening: 'Bonne soirée'
      ulm_custom_card_paddy_welcome_hello: 'Salut'
`;

  var cardPlaystation = 'cardPlaystation';
  var cardQubino = 'cardQubino';
  var cardThermostat = 'cardThermostat';
  var cardWaterHeater = 'cardWaterHeater';

  var example = `views:
  - title: Minimalist
    path: minimalist
    badges: []
    cards: 
      - type: horizontal-stack
        card:
          - type: custom:button-card
            template: edge
          - type: custom:button-card
            template: title
            name: UI-Lovelace-Minimalist
          - type: custom:button-card
            template: edge
      - type: horizontal-stack
        card:
          - type: custom:button-card
            template: edge
          - type: custom:button-card
            template: 
              - card_light
            entity: group.livingroom_lights
          - type: custom:button-card
            template: 
              - card_light
            entity: group.kitchen_lights
          - type: custom:button-card
            template: edge
`;

  var result = '';
  var language = '';
  var language_selected = '';

  header = `########################################
#
# UI-Lovelace-Minimalist CodeGenerator Installation
#
# Author: Paddy0174
#
# This code was generated using "UI-Lovelace-Minimalist CodeGenerator" 
# with the following options selected:
# `;

  result += `button_card_templates:
`;

  language = document.getElementsByName('language');
  for (i=0; i < language.length; i++){
    if (language[i].checked){
      if (language[i].value == 'de'){
        result += de + "\n";
        header += `language: de | `;
        language_selected = 'de';
      } else if (language[i].value == 'fr') {
        result += fr + "\n";
        header += `language: fr | `;
        language_selected = 'fr';
      } else {
        result += en + "\n";
        header += `language: en | `;
        language_selected = 'en';
      }
    }
  }

  result += button_card_templates + "\n";

  if (document.getElementById('card-aircondition').checked == true){
  
    result += cardAircondition + "\n";  
  
    if (language_selected == 'de'){
      result += cardAircondition_de + "\n";
    } else if (language_selected == 'fr'){
      result += cardAircondition_fr + "\n";
    } else {
      result += cardAircondition_en + "\n";
    }
  
    header += 'card-aircondition | '
  }

  if (document.getElementById('card-dwd-pollen').checked == true){
    result += cardDwdPollen + "\n";
    result += cardDwdPollen_de + "\n";
    header += 'card-dwd-pollen | '
  }
  
  if (document.getElementById('card-flower').checked == true){
  
    result += cardFlower;
  
    if (language_selected == 'de'){
      result += cardFlower_de + "\n";
    } else if (language_selected == 'fr'){
      result += cardFlower_fr + "\n";
    } else {
      result += cardFlower_en + "\n";
    }
  
    header += 'card-flower | '
  }
  
  if (document.getElementById('card-nas').checked == true){
    result += cardNas + "\n";
    header += 'card-nas | '
  }
  
  if (document.getElementById('card-waste-collection').checked == true){
    result += cardWasteCollection + "\n";
    header += 'card-waste-collection | '
  }
  
  if (document.getElementById('card-welcome').checked == true){
  
    result += cardWelcome + "\n";
  
    if (language_selected == 'de'){
      result += cardWelcome_de + "\n";
    } else if (language_selected == 'fr'){
      result += cardWelcome_fr + "\n";
    } else {
      result += cardWelcome_en + "\n";
    }
  
    header += 'card-welcome | '
  }
  
  if (document.getElementById('card-playstation').checked == true){
    result += cardPlaystation + "\n";
    header += 'card-playstation | '
  }
  
  if (document.getElementById('card-qubino').checked == true){
    result += cardQubino + "\n";
    header += 'card-qubino | '
  }
  
  if (document.getElementById('card-thermostat').checked == true){
    result += cardThermostat + "\n";
    header += 'card-thermostat | '
  }
  
  if (document.getElementById('card-water-heater').checked == true){
    result += cardWaterHeater + "\n";
    header += 'card-water-heater | '
  }
  
  if (document.getElementById('example').checked == true){
    result += example + "\n";
    header += 'example data | '
  }
  
  header += `
#
########################################
`;
  header += "\n";

  document.getElementById('generated_code').value = header + result;

}