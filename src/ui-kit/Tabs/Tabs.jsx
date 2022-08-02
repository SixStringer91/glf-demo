import React, { memo } from "react";
import classJoin from "classnames";
import classes from './Tabs.module.css';

function Tabs ({
    classNames = {},
    selectedId,
    tabs,
    onClick,
  }) {

const propsClasses = {
    root: classes.Tabs, 
    tab: classes.Tab,
    selectedTabs: classes.Tab__selected, 
    label: classes.TabsLabel,
    selectedLabel: classes.TabLabel__selected, 
    ...classNames
}

    return (
        <div className={classJoin(classes.Tabs, propsClasses.root)}>
          {tabs &&
            tabs.map(tab => (
              <div
                className={classJoin(propsClasses.tab, {
                  [propsClasses.selectedTabs]: tab.id === selectedId,
                })}
                key={tab.id}
                onClick={() => onClick(tab.id)}
              >
                <div
                  className={classJoin(propsClasses.label, {
                    [propsClasses.selectedLabel]: tab.id === selectedId,
                  })}
                >
                  {tab.label}
                </div>
              </div>
            ))}
        </div>
      );
}

export default memo(Tabs);