import React, {PureComponent} from 'react';

 const TabContext = React.createContext({
    activeTab: '1',
    toggleTab: () => {},
  });

  export default TabContext;