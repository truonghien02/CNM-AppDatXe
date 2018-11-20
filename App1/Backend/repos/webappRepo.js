var db = require('../fn/mysql');

exports.add = userEntity => {
    var sql = `insert into kh(name, phone, address, note) values('${userEntity.name}', '${userEntity.phone}', '${userEntity.address}', '${userEntity.note}')`;

    return db.insert(sql);
}
