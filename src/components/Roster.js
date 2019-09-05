import React from 'react'
import { Switch, Route } from 'react-router-dom'
import FullRoster from './FullRoster'
import Player from './Player'

// The Roster component matches one of two different routes
// depending on the full pathname
// 将带有相同前缀的路由放在同一个组件中，简化父组件，并且可以在一个地方渲染所有带有相同前缀的组件
const Roster = () => (
  <Switch>
    <Route exact path='/roster' component={FullRoster}/>
    <Route path='/roster/:number' component={Player}/>
  </Switch>
)


export default Roster
