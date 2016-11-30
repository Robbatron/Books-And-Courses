function User(id) {
    this.id = id;
}

function generateId() {
    return Math.random() * 9999999;
}

function createAdminUser(user = new User(generateId())) {
    user.admin = true;
    return user;
}

const user = new User(generateId());
createAdminUser();