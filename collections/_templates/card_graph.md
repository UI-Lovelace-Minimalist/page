---
title: Graph Card
name: card_graph
category: card
explanation: |-
  The `card_graph` shows an entity with the actual state and a *min-graph-card* integrated. This can be used for a thermostat to show the actual temperature and the history. It how supports dual graphs as well as bar style graphs."
image_path: "/assets/images/card_graph.png"
internal: false
generator_install: true
generator_example: true
generator_button: true
variables:
  - name: ulm_card_graph_color
    type: variable
    example: var(--google-blue)
    required: false
    explanation: |-
      This is to adjust your color value. Use a CSS varible from HA or set a color value (eg. #FFFFFF)
  - name: ulm_card_graph_name
    type: variable
    example: Temperature Livingroom
    required: false 
    explanation: "The name of your sensor"
  - name: ulm_card_graph_entity
    type: variable
    example: sensor.livingroom_temperature
    required: true 
    explanation: "Your <i>entity_id</i> for the temperature sensor"
  - name: ulm_card_graph_entity2
    type: variable
    example: sensor.bedroom_temperature
    required: false
    explanation: "Your <i>entity_id</i> for the second temperature sensor"
  - name: ulm_card_graph_color2
    type: variable
    example: var(--google-green)
    required: false
    explanation: |-
      This is to adjust your color value of the second graph. Use a CSS varible from HA or set a color value (eg. #FFFFFF)
  - name: ulm_card_graph_type
    type: variable
    example: fill
    required: false
    explanation: |-
      This is to change the appearence of the graph. Default is fill, but line, bar are valid options.
  - name: ulm_card_graph_hours
    type: variable
    example: 24
    required: false
    explanation: |-
      How much time should the graph cover, default is 24 hours.
yaml: |-
  - type: 'custom:button-card'
    template: card_graph
    variables:
      ulm_card_graph_color: "var(--google-blue)"
      ulm_card_graph_name: Temperature Livingroom
      ulm_card_graph_entity: sensor.livingroom_temperature
      ulm_card_graph_color2: "var(--google-green)"
      ulm_card_graph_entity2: sensor.bedgroom_temperature
      ulm_card_graph_type: fill
      ulm_card_graph_hours: 24
ui: |-
  type: 'custom:button-card'
  template: card_graph
  variables:
      ulm_card_graph_color: "var(--google-blue)"
      ulm_card_graph_name: Temperature Livingroom
      ulm_card_graph_entity: sensor.livingroom_temperature
      ulm_card_graph_color2: "var(--google-green)"
      ulm_card_graph_entity2: sensor.bedgroom_temperature
      ulm_card_graph_type: fill
      ulm_card_graph_hours: 24
code: |-
card_graph:
  variables:
    ulm_card_graph_color: "var(--info-color)"
    ulm_card_graph_name: "n/a"
    ulm_card_graph_color2: "var(--info-color)"
    ulm_card_graph_name2: "n/a"
    ulm_card_graph_entity2: ""
    ulm_card_graph_hours: 24
    ulm_card_graph_type: "fill"
  triggers_update: "all"
  styles:
    grid:
      - grid-template-areas: "'item1' 'item2'"
      - grid-template-columns: "1fr"
      - grid-template-rows: "min-content  min-content"
    card:
      - border-radius: "var(--border-radius)"
      - box-shadow: "var(--box-shadow)"
      - padding: "0px"
  custom_fields:
    item1:
      card:
        type: "custom:button-card"
        template:
          - "icon_info"
          - "card_generic"
        styles:
          card:
            - box-shadow: "none"
            - border-radius: "var(--border-radius) var(--border-radius) 0px 0px"
            - padding: "12px"
        entity: "[[[ return variables.ulm_card_graph_entity ]]]"
        name: "[[[ return variables.ulm_card_graph_name ]]]"
    item2:
      card:
        type: "custom:mini-graph-card"
        entities: >
          [[[
            var ent = [];
            ent.push(variables.ulm_card_graph_entity);
            if(variables.ulm_card_graph_entity2 != "")
              ent.push(variables.ulm_card_graph_entity2);
            return ent;
          ]]]
        line_color: >
          [[[
            var col = [];
            col.push(variables.ulm_card_graph_color);
            if(variables.ulm_card_graph_color2 != "")
              col.push(variables.ulm_card_graph_color2);
            return col;
          ]]]
        show:
          name: false
          icon: false
          legend: false
          state: false
          graph: "[[[ return variables.ulm_card_graph_type=='fill'?'line':variables.ulm_card_graph_type; ]]]"
          fill: "[[[ return variables.ulm_card_graph_type=='fill'?true:false; ]]]"
        hours_to_show: "[[[ return variables.ulm_card_graph_hours; ]]]"
        style: |
          ha-card {
            box-shadow: none;
            border-radius: var(--border-radius);
          }
---