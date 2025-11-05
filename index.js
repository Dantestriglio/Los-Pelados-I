  import fs from "fs";
  import {
    seleccionarCantidadGustos,
    ingresarCliente,
    seleccionarProducto,
    seleccionarSabores,
  } from "./dataEntry.js";

  // Cargar sabores y productos
  // COMPLETEN USTEDES
  let sabores = JSON.parse(fs.readFileSync("data/productos.json","utf-8"));
  let productos = JSON.parse(fs.readFileSync("data/productos.json","utf-8"));

  // Ingresar cliente
  let cliente = ingresarCliente();
  // Elegir producto
  let producto = seleccionarProducto(productos);
  // Elegir cantidad de gustos
  let gustos = seleccionarCantidadGustos(producto.maxGustos);
  // Elegir sabores
  let saboresElegidos = seleccionarSabores(sabores, gustos);

  // Guardar pedido
  // COMPLETEN USTEDES
  let pedido = {
    cliente : cliente,
    producto :productos,
    sabores : saboresElegidos
  }

  //poner chcp 65001 antes de correr el codigo para que se conveinrta a utf 8 y no halla errorees de ortografia
let pedidos = []
const pedidosPath = data/pedidos.json


try {
  pedidos = JSON.parse(fs.readFileSync(pedidosPath, "utf-8"));
} catch (error) {
  console.log("No se encontró pedidos.json");
  pedidos = []
}


  pedidos.push(pedido)

fs.writeFileSync(pedidosPath, JSON.stringify(pedidos,))

console.log("Pedido guardado correctamente");




  
