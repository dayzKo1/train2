import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import "./css/index.css";
import { FontAwesomeIcon } from "fontawesome";
function component() {
  var element = document.createElement('div');
  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  return element;
}
document.body.appendChild(component());
