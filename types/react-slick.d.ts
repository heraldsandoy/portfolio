declare module 'react-slick' {
  import * as React from 'react';

  export default class Slider extends React.Component<SliderSettings, any> {}

  interface SliderSettings {
    // Define the settings you plan to use, such as dots, infinite, etc.
    dots?: boolean;
    infinite?: boolean;
    speed?: number;
    slidesToShow?: number;
    slidesToScroll?: number;
    // Add more settings as needed
  }
}