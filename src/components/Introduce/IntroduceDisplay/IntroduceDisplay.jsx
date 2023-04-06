import React from 'react';

import './IntroduceDisplay.css';
import IntroduceWordCloud from "../../Introduce/IntroduceWordCloud/IntroduceWordCloud.jsx";
import IntroducePmAndTem from "../../Introduce/IntroducePmAndTem/IntroducePmAndTem.jsx";
import IntroduceMap from "../../Introduce/IntroduceMap/IntroduceMap.jsx";
import IntroduceRate from "../../Introduce/IntroduceRate/IntroduceRate.jsx";

export default function IntroduceDisplay(){

    return <section className="introduceDisplay">
        {/*放置组件*/}
        <IntroduceMap/>{/*地图和柱状*/}
        <IntroduceWordCloud/>{/*词云*/}
        <IntroducePmAndTem/>{/*PM和人均*/}
        <IntroduceRate/>{/*降水*/}
    </section>;
}
