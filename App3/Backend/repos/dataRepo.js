var data = require('../fn/mysql-data.js');

exports.loadAll = () => {
	var sql = 'select * from `ttkh`.`kh`';
	return data.load(sql);
}
exports.loadDriver=()=>{
	var sql = 'select * from `ttkh`.`taixe`';
	return data.load(sql);
}
