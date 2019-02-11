// import React, { ReactNode } from 'react';

// interface ResType {
//   default: ReactNode
// }

// interface Props {

// }

// interface State {
//   Component: null | ReactNode
// }

// /**
//  * @param {functoin} load
//  * eg. getAsyncComponent(() => import('../xxx))
//  */
// export default function getDynamicComponent(load: Function) {
//   return class DynamicComponent extends React.PureComponent<Props, State> {
//     constructor(props: Props) {
//       super(props);
//       this.state = {
//         Component: null,
//       };
//     }

//     componentDidMount() {
//       load().then((res: ResType) => {
//         this.setState({
//           Component: res.default
//         });
//       });
//     }

//     render() {
//       const { Component } = this.state;
//       return Component ? <Component /> : null;
//     }
//   };
// }