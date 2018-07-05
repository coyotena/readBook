/* 插件 */
import React from 'react';
import {render} from 'react-dom';
import {Provider} from  'react-redux';
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom';
import Home from './routes/Home'
import Play from './routes/Play'
import RoomCar from './routes/RoomCar'
import Person from './routes/Person'

import store from './store/index'

/* antd */
import {LocaleProvider} from 'antd';
import zh_cn from 'antd/lib/locale-provider/zh_CN';

/* 样式 */
import './static/less/reset.min.css';
import './static/less/common.less';

/* 自定义组件 */


render(
    <Provider store={store}>
        <LocaleProvider locale={zh_cn}>
            <HashRouter>
                <Switch>
                    <Route path={'/home'} component={Home}/>
                    <Route path={'/play'} component={Play}/>
                    <Route path={'/roomcar'} component={RoomCar}/>
                    <Route path={'/person'} component={Person}/>
                    <Redirect to={'/home'}/>
                </Switch>
            </HashRouter>
        </LocaleProvider>
    </Provider>,
    document.getElementById('root')
);
