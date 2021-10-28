function generateExampleCode ()
{
  var header = '';
  var result = '';

  var chipTemperature = `          - type: 'custom:button-card'
            template: chip_temperature
            variables:
              ulm_chip_temperature_inside: '<Enter sensor inside temperature here>'
              ulm_chip_temperature_outside: '<Enter sensor outside temperature here>'
              ulm_chip_temperature_weather: '<Enter sensor weather provider here>'
`;
  var chipIconOnly = `          - type: 'custom:button-card'
            template: chip_icon_only
            variables:
              ulm_chip_icon_only: '❤️'
`;
  var chipIconState = `          - type: 'custom:button-card'
            template: chip_icon_state
            variables:
              ulm_chip_icon_state_icon: '🛏️'
              ulm_chip_icon_state_entity: '<Enter sensor here>'
`;
  var chipDoubleState = `          - type: 'custom:button-card'
            template: chip_icon_double_state
            variables:
              ulm_chip_icon_double_state_icon: '💻'
              ulm_chip_icon_double_state_entity_1: '<Enter sensor1 here>'
              ulm_chip_icon_double_state_entity_2: '<Enter sensor2 here>'
`;
  var chipBack = `          - type: 'custom:button-card'
            template: chip_back
            tap_action:
              action: navigate
              navigation_path: /ui-lovelace-minimalist/minimalist
`;
  var chipPresenceDetection = `          - type: 'custom:button-card'
            template: chip_presence_detection
            variables:
              ulm_chip_presence_counter_residents: '<Enter sensor resident counter here>'
              ulm_chip_presence_counter_guests: '<Enter sensor guest counter here>'
`;
  var chipPowerConsumption = `          - type: 'custom:button-card'
            template: chip_power_consumption
            variables:
              ulm_chip_electric_consumption: '<Enter sensor electric consumption here>'
              ulm_chip_electric_price: '<Enter sensor electric price here>'
`;

  var cardTitle = `          - type: custom:button-card
            template:
              - card_title
            name: '<Enter title here>'
            label: '<Enter subtitle here>'
`;

  var cardGeneric = `          - type: 'custom:button-card'
            template: card_generic
            entity: '<Enter sensor here>'
`;

  var cardGenericSwap = `          - type: 'custom:button-card'
            template: card_generic_swap
            entity: '<Enter sensor here>'
  `;

  var cardLight = `          - type: 'custom:button-card'
            template: card_light
            entity: '<Enter light here>'
`;

  var cardLightSlider = `          - type: 'custom:button-card'
            template: card_light_slider
            entity: '<Enter light here>'
            variables:
              ulm_card_light_slider_name: '<Enter name for the light here>'
`;
  
  var cardPowerOutlet = `          - type: 'custom:button-card'
            template: card_power_outlet
            entity: '<Enter sensor here>'
            name: '<Enter name here>'
            variables:
              ulm_power_outlet_consumption_sensor: '<Enter consumtion sensor here>'
`;

  var cardBinarySensor = `          - type: 'custom:button-card'
            template: card_binary_sensor
            entity: '<Enter binary sensor here>'
            show_last_changed: true
`;

  var cardNavigate = `          - type: custom:button-card
            template: card_navigate
            variables:
              ulm_card_navigate_path: /ui-lovelace-minimalist/media
              ulm_card_navigate_title: Media
              ulm_card_navigate_icon: mdi:television 
`;
  var cardMediaPlayer = `          - type: 'custom:button-card'
            template: card_media_player
            entity: '<Enter media player here>'
            name: '<Enter name here>'
`;
  var cardMediaPlayerWithControl = `          - type: 'custom:button-card'
            template: card_media_player_with_control
            entity: '<Enter media player here>'
            name: '<Enter name here>'
`;

  var cardBattery = `          - type: 'custom:button-card'
            template: card_battery
            variables:
              ulm_card_battery_attribute: '<Enter battery attribute here>'
            entity: '<Enter sensor here>'
`;

  var cardPerson = `          - type: 'custom:button-card'
            template: card_person
            variables:
              ulm_card_person_entity: '<Enter person here>'
              ulm_card_person_use_entity_picture: true
              ulm_card_person_zone1: work
              ulm_card_person_zone2: school
  `;

  var cardCoverWithButtons = `          - type: 'custom:button-card'
            template: 
              - card_cover_with_buttons
            variables:
              ulm_card_cover_with_buttons_name: '<Enter name here>'
              ulm_card_cover_with_buttons_entity: '<Enter cover here>'
`;

  var cardGraph = `          - type: 'custom:button-card'
            template: card_graph
            variables:
              ulm_card_graph_color: "var(--google-blue)"
              ulm_card_graph_name: '<Enter name here>'
              ulm_card_graph_entity: '<Enter graph sensor here>'
`;
  var cardMediaPlayerWithControls = `          - type: 'custom:button-card'
            template: 
              - card_media_player_with_controls
            variables:
              ulm_card_media_player_with_controls_name: '<Enter name here>'
              ulm_card_media_player_with_controls_entity: '<Enter media player here>'
`;

  var view = `views:
  - title: Minimalist
    path: minimalist
    badges: []
    cards: 
`;
  var row_start = `      - type: horizontal-stack
        cards:
          - type: custom:button-card
            template: edge
`;
  var row_end = `          - type: custom:button-card
            template: edge
`;

  header = `########################################
#
# UI-Lovelace-Minimalist CodeGenerator Examples
#
# Author: Paddy0174
#
# This code was generated using "UI-Lovelace-Minimalist CodeGenerator" 
# with the following options selected:
# `;
  
  var chips_set = 0;
  var title_set = 0;
  var cards_set_1 = 0;
  var cards_set_2 = 0;
  var cards_set_3 = 0;
  var cards_set_4 = 0;
  var cards_set_5 = 0;

  result += view;
  result += row_start;

  if (document.getElementById('chip_back').checked == true){
    result += chipBack;
    header += 'chip_back | ';
    chips_set = chips_set +1;
  }

  if (document.getElementById('chip_temperature').checked == true){
    result += chipTemperature;
    header += 'chip_temperature | ';
    chips_set = chips_set +1;
  }

  if (document.getElementById('chip_icon_only').checked == true){
    result += chipIconOnly;
    header += 'chip_icon_only | ';
    chips_set = chips_set +1;
  }

  if (document.getElementById('chip_icon_state').checked == true){
    result += chipIconState;
    header += 'chip_icon_state | ';
    chips_set = chips_set +1;
  }

  if (document.getElementById('chip_double_state').checked == true){
    result += chipDoubleState;
    header += 'chip_double_state | ';
    chips_set = chips_set +1;
  }

  if (document.getElementById('chip_presence_detection').checked == true){
    result += chipPresenceDetection;
    header += 'chip_presence_detection | ';
    chips_set = chips_set +1;
  }

  if (document.getElementById('chip_power_consumption').checked == true){
    result += chipPowerConsumption;
    header += 'chip_power_consumption | ';
    chips_set = chips_set +1;
  }

  if (chips_set < 0){
    result += row_end;
    result += row_start;
  }

  if (document.getElementById('card_title').checked == true){
    result += cardTitle;
    header += 'card_title | ';
    result += row_end;
    result += row_start
    title_set = title_set +1;
  }

  if (document.getElementById('card_generic').checked == true){
    result += cardGeneric;
    header += 'card_generic | ';
    cards_set_1 = cards_set_1 +1;
  }

  if (document.getElementById('card_generic_swap').checked == true){
    result += cardGenericSwap;
    header += 'card_generic_swap | ';
    cards_set_1 = cards_set_1 +1;
  }

  if (document.getElementById('card_light').checked == true){
    result += cardLight;
    header += 'card_light | ';
    cards_set_1 = cards_set_1 +1;
  }

  if (document.getElementById('card_title').checked == true){
    result += row_end;
    result += row_start;
    result += cardTitle;
    header += 'card_title | ';
    cards_set_1 = cards_set_1 +1;
  }

  if (cards_set_1 > 0){
    result += row_end;
    result += row_start;
  }

  if (document.getElementById('card_power_outlet').checked == true){
    result += cardPowerOutlet;
    header += 'card_power_outlet | ';
    cards_set_2 = cards_set_2 +1;
  }

  if (document.getElementById('card_binary_sensor').checked == true){
    result += cardBinarySensor;
    header += 'card_binary_sensor | ';
    cards_set_2 = cards_set_2 +1;
  }

  if (document.getElementById('card_navigate').checked == true){
    result += cardNavigate;
    header += 'card_navigate | ';
    cards_set_2 = cards_set_2 +1;
  }

  if (cards_set_2 > 0){
    result += row_end;
    result += row_start;
  }

  if (document.getElementById('card_battery').checked == true){
    result += cardBattery;
    header += 'card_battery | ';
    cards_set_3 = cards_set_3 +1;
  }

  if (document.getElementById('card_person').checked == true){
    result += cardPerson;
    header += 'card_person | ';
    cards_set_3 = cards_set_3 +1;
  }

  if (document.getElementById('card_media_player').checked == true){
    result += cardMediaPlayer;
    header += 'card_media_player | ';
    cards_set_3 = cards_set_3 +1;
  }

  if (cards_set_3 > 0){
    result += row_end;
    result += row_start;
  }

  if (document.getElementById('card_light_slider').checked == true){
    result += cardLightSlider;
    result += cardLightSlider;
    header += 'card_light_slider | ';
    result += row_end;
    result += row_start;
  }

  if (document.getElementById('card_cover_with_buttons').checked == true){
    result += cardCoverWithButtons;
    header += 'card_cover_with_buttons | ';
    cards_set_4 = cards_set_4 +1;
  }

  if (document.getElementById('card_graph').checked == true){
    result += cardGraph;
    header += 'card_graph | ';
    cards_set_4 = cards_set_4 +1;
  }

  if (cards_set_4 > 0){
    result += row_end;
    result += row_start;
  }

  if (document.getElementById('card_media_player_with_controls').checked == true){
    result += cardMediaPlayerWithControls;
    header += 'card_media_player_with_controls | ';
    cards_set_5 = cards_set_5 +1;
  }

  if (document.getElementById('card_media_player_with_control').checked == true){
    result += cardMediaPlayerWithControl;
    header += 'card_media_player_with_control | ';
    cards_set_5 = cards_set_5 +1;
  }

  result += row_end;

  header += `
#
########################################

`;

  document.getElementById('code').value = header + result;
}