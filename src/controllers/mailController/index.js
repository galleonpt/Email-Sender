const {
  main
} = require("../../functions/mail")

module.exports = {
  send(request, response) {
    const {
      username,
      password
    } = request.body;

    const output = `
      Successfully registered
      Username: ${username},
      Password: ${password}
    `;

    main(output).catch(console.error);

    return response.send(
      "Email enviado com sucesso!"
    );
  }
}