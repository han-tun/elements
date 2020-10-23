import React from 'react';
import BasemapSwitcher from './BasemapSwitcher';
import Map from '../Map/Map';
import ElementsProvider from '../_common/ElementsProvider';
import { storiesOf } from '@storybook/react';
import { withKnobs, radios } from '@storybook/addon-knobs';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapOptions from '../../util/mockMapOptions';

storiesOf('BasemapSwitcher', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    return (
      <ElementsProvider>
        <Map mapOptions={mapOptions} />
        <BasemapSwitcher
          type="panel"
          switcherStyle={radios('switcherStyle', ['radio', 'buttons'], 'radio')}
        />
      </ElementsProvider>
    );
  })
  .add('Button', () => {
    return (
      <ElementsProvider>
        <Map mapOptions={mapOptions}>
          <BasemapSwitcher
            type="button"
            switcherStyle={radios(
              'switcherStyle',
              ['radio', 'buttons'],
              'radio'
            )}
          />
        </Map>
      </ElementsProvider>
    );
  })
  .add('User Defined Maps', () => {
    return (
      <ElementsProvider>
        <Map mapOptions={mapOptions} />
        <BasemapSwitcher
          type="panel"
          basemaps={[
            {
              name: 'light',
              key: 'light',
              label: 'Light',
              value: 'light-v10'
            },
            {
              name: 'dark',
              key: 'dark',
              label: 'Dark',
              value: 'dark-v10'
            }
          ]}
          switcherStyle={radios('switcherStyle', ['radio', 'buttons'], 'radio')}
        />
      </ElementsProvider>
    );
  });
