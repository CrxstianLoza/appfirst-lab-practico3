import request from "supertest";
import app from "../app";

describe("Prueba CRUD Usuario", () => {

  //Registrar un usuario

  test("Debe de crearse un usuario", async () => {
    const response = await request(app)
      .post("/usuarios")
      .send({
        nombre: "Cristian",
        email: "loza@gmail.com",
      });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("mensaje", "Usuario creado");
  });

  //Prueba unitaria para get

  test("Listar los usuarios", async () => {
    const response = await request(app)
      .get("/usuarios");

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  //PRUEBA UNITARIA PARA PUT

  test("Actualizar un usuario", async () => {
  const response = await request(app)
    .put("/usuarios/1")
    .send({
      nombre: "Cristian actualizado",
      email: "nuevo@gmail.com",
    });

  expect(response.status).toBe(200);
  expect(response.body).toHaveProperty("mensaje", "Usuario actualizado");
  });

  //PRUEBA UNITARIA PARA DELETE

  test("Eliminar un usuario", async () => {
  const response = await request(app)
    .delete("/usuarios/1");

  expect(response.status).toBe(200);
  expect(response.body).toHaveProperty("mensaje", "Usuario eliminado");
});
});