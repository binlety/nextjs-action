import { createIconFont } from '@rsuite/icons';

const IconFont = createIconFont({
  // Icon resource: https://www.iconfont.cn/
  scriptUrl: '//at.alicdn.com/t/font_2963116_0zih2jd26k7.js',
  // commonProps: { style: { fontSize: 30, color: '#1675e0' } },
  // onLoaded: () => {
  //   console.log('onLoaded');
  // }
});

export default ({ type, style = {}, className = '' }) => {
  return <IconFont icon={type} style={style} className={className} />;
};
