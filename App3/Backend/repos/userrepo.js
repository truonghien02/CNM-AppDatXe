var md5 = require('crypto-js/md5');

var db = require('../fn/mysql-data');

exports.add = userEntity => {
    var md5_pwd = md5(userEntity.Password);
    var sql = `insert into users(Username, Password, Email, Permission) values('${userEntity.Username}', '${md5_pwd}', '${userEntity.Email}', '${userEntity.Permission}')`;

    return db.insert(sql);
}

exports.login = loginEntity => {
    var md5_pwd = md5(loginEntity.pwd);
	var sql = `select * from users where Username = '${loginEntity.user}' and Password = '${md5_pwd}'`;
	return db.load(sql);
}
