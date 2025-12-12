//npm - global commands,comes with nodejs
//local dependency - use it only in this particular project
//global dependency - use it in any project
//npm i <package_name> - to install a package
//npm uninstall <package_name> - to uninstall a package
//npm init - to create a package.json file

const _ = require('lodash');

const items=[1,[2,[3,[4]]]];
const newItems=_f.flattenDeep(items);
console.log(newItems);