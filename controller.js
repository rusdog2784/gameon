module.exports = {

  createPlayer ({ first_name, last_name, email, password, date_joined, last_active }) {
    console.log(`Add player: ${first_name} ${last_name}\n\t${email}\n\t${password}\n\t${date_joined}\n\t${last_active}`);
    return Promise.resolve();
  }

}