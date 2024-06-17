# xml-gen-fee

Este paquete genera documentos xml en base las normas de SUNAT.

## Instalar:

```bash
npm install @marin/xml-gen-fee
```

## Ejemplo

```js
const xmlGenFee = require("@marin/xml-gen-fee");

const data = {
  ublVersion: "2.1" // Version de ubl
  serie: "B001", // Serie
  correlativo: "01" // Correlation
  tipoMoneda: "PEN", // Moneda de la factura
  // Información de la empresa emisora
  company: {
    ruc: "20123456789", // RUC de la empresa
    nombreComercial: "Mi Empresa S.A.C.", // Nombre comercial de la empresa
    razonSocial: "Mi Empresa", // Razón social de la empresa
    address: {
      // Dirección de la empresa
      ubigueo: "150101", // Código de ubicación
      codLocal: "0000", // Código de local
      urbanizacion: "-", // Urbanización
      provincia: "LIMA", // Provincia
      departamento: "LIMA", // Departamento
      distrito: "LIMA", // Distrito
      direccion: "AV EJEMPLO 123", // Dirección completa
      codPais: "PE", // Código de país
    },
    telefono: "03-392910", // Teléfono de contacto
    correo: "admin@miempresa.com", // Correo electrónico de contacto
  },
  // Información del cliente
  client: {
    tipoDoc: "1", // Tipo de documento (1 = DNI)
    numDoc: "20203030", // Número de documento
    rznSocial: "PERSON 1", // Razón social o nombre del cliente
    ubigeo: "150102", // Código de ubicación del cliente
    direccion: "AV LIBERTAD 456", // Dirección del cliente
    codPais: "PE", // Código de país del cliente
  },
  // Detalles de la venta
  saleDetails: [
    {
      index: 1, // Índice del detalle
      unidad: "NIU", // Unidad de medida (NIU = unidad)
      cantidad: 10, // Cantidad de unidades vendidas
      mtoValorVenta: 100.0, // Valor de venta total
      mtoPrecioUnitario: 10.0, // Precio unitario
      mtoImpuesto: 18.0, // Monto del impuesto (IGV)
      mtoBaseIgv: 100.0, // Base imponible del IGV
      porcentajeIgv: 18, // Porcentaje del IGV
      descProducto: "Producto 1", // Descripción del producto
      codProducto: "C001", // Código del producto
      mtoValorUnitario: 10.0, // Valor unitario
    },
  ],
};

const result = xmlGenFee.generateInvoice(data);

console.log(result);
```
