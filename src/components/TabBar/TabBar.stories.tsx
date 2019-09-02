import * as React from 'react'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'

import styled from 'styled-components'

import { Tab } from './Tab'
import { TabBar } from './TabBar'

import readme from './README.md'

storiesOf('TabBar', module)
  .addParameters({
    readme: {
      sidebar: readme,
    },
  })
  .add('all', () => (
    <Ul>
      <li>
        <p>Border</p>
        <TabBar>
          <Tab label="Tab" id="1" onClick={action('clicked')} />
          <Tab label="Selected" id="2" onClick={action('clicked')} selected />
          <Tab label="Disabled" id="3" onClick={action('clicked')} disabled />
        </TabBar>
      </li>
      <li>
        <p>No border</p>
        <TabBar bordered={false}>
          <Tab label="Tab" id="1" onClick={action('clicked')} />
          <Tab label="Selected" id="2" onClick={action('clicked')} selected />
          <Tab label="Disabled" id="3" onClick={action('clicked')} disabled />
        </TabBar>
      </li>
    </Ul>
  ))

const Ul = styled.ul`
  padding: 0 1rem;

  li {
    margin-bottom: 1rem;
    list-style: none;
  }
`