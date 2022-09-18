import "./table.scss";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const List = () => {

  const rows = [
    {
      product_id: 1143155,
      title: "Zapatillas Nike revolution 6",
      img: "https://home.ripley.com.pe/Attachment/WOP_5/2084279943594/2084279943594_2.jpg",
      user: "John Smith",
      created_at: "1 Marzo",
      price: 190,
      method: "Envío contra reembolso",
      status: "Aprobado",
    },
    {
      product_id: 2235235,
      title: "Zapatillas Nike Air max ap",
      img: "https://home.ripley.com.pe/Attachment/WOP_5/2025291100152/2025291100152_2.jpg",
      user: "Michael Doe",
      created_at: "1 Marzo",
      price: 220,
      method: "Pago Online",
      status: "Pendiente",
    },
    {
      product_id: 2342353,
      title: "Zapatillas Converse All Star",
      img: "https://www.tienda.quonam.com.ar/media/catalog/product/cache/d38be127ecf06dfec35606e11d013cfe/9/5/950-157197C-NEGRO_1_20.jpg",
      user: "John Smith",
      created_at: "1 Marzo",
      price: 190,
      method: "Envío contra reembolso",
      status: "Aprobado",
    },
    {
      product_id: 2357741,
      title: "Zapatillas Adidas Predator",
      img: "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/d65ddd6d37be410fa0a6ad8101167411_9366/Chimpunes_Predator_Edge.4_Cerre_por_Contacto_para_Pasto_Sintetico_Azul_GZ3819_01_standard.jpg",
      user: "Jane Smith",
      created_at: "1 Marzo",
      price: 140,
      method: "Pago Online",
      status: "Aprobado",
    },
    {
      product_id: 2342355,
      title: "Zapatillas Nike Air Jordan 1 Mid",
      img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/d81fee2a-e014-4fa1-9f6c-1870e8554a07/calzado-air-jordan-1-mid-RRTg1P1y.png",
      user: "Harold Carol",
      created_at: "1 Marzo",
      price: 1530,
      method: "Pago Online",
      status: "Pendiente",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Producto</TableCell>
            <TableCell className="tableCell">Cliente</TableCell>
            <TableCell className="tableCell">Fecha</TableCell>
            <TableCell className="tableCell">Cantidad</TableCell>
            <TableCell className="tableCell">Metodo de Pago</TableCell>
            <TableCell className="tableCell">Estado</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.product_id}>
              <TableCell className="tableCell">{row.product_id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.title}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.user}</TableCell>
              <TableCell className="tableCell">{row.created_at}</TableCell>
              <TableCell className="tableCell">{row.price}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
  </TableContainer>
  )
}

export default List