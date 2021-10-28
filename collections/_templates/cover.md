---
name: cover
internal: true
code: |-
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
---
