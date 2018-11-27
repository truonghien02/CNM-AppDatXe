var db = require('../fn/mysql-db');

exports.loadAll = () => {
	var sql = 'select * from kh';
	return db.load(sql);
}

exports.insertGeocode = (clientinfo) => {
	console.log(clientinfo)
	var sql = `update kh
			 	set latitude='${clientinfo.latitude}', 
			 		longtitude='${clientinfo.longtitude}',
			 		status = 1
				where kh.name='${clientinfo.name}'
					and kh.phone = '${clientinfo.phone}'
					and kh.address = '${clientinfo.address}';
			 `;
		
	return db.load(sql);
}

