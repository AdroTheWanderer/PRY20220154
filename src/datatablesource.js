export const userColumns = [
    { field: "id", headerName: "ID", width: 180 },
    {
      field: "usuario",
      headerName: "Usuario",
      width: 180,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {params.row.usuario}
          </div>
        );
      },
    },
    {
        field:"correo", 
        headerName:"Correo", 
        width: 230,
    },
    {
      field:"direccion", 
      headerName:"Dirección", 
      width: 230,
    },
    {
        field:"rol", 
        headerName:"rol", 
        width: 140,
    },
    {
        field:"status", 
        headerName:"Status", 
        width: 160,
        renderCell:(params)=>{
            return (
                <div className={`cellWithStatus ${params.row.status}`}>
                    {params.row.status}
                </div>
            )
        }
    },
    {
      field:"creado_en", 
      headerName:"Creado_en", 
      width: 140,
    },
    {
      field:"actualizado_en", 
      headerName:"Actualizado_en", 
      width: 140,
    },
  ];


  export const productColumns = [
    { field: "id", headerName: "ID", width: 180 },
    {
      field: "titulo",
      headerName: "Titulo",
      width: 180,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {params.row.usuario}
          </div>
        );
      },
    },
    {
      field:"descripcion", 
      headerName:"Descripcion", 
      width: 230,
    },
    {
        field:"precio", 
        headerName:"Precio", 
        width: 140,
    },
    {
        field:"status", 
        headerName:"Status", 
        width: 160,
        renderCell:(params)=>{
            return (
                <div className={`cellWithStatus ${params.row.status}`}>
                    {params.row.status}
                </div>
            )
        }
    },
    {
      field:"creado_en", 
      headerName:"Creado_en", 
      width: 140,
    },
    {
      field:"actualizado_en", 
      headerName:"Actualizado_en", 
      width: 140,
    },
  ];

  export const brandsColumns = [
    { field: "id", headerName: "ID", width: 180 },
    {
      field: "titulo",
      headerName: "Titulo",
      width: 180,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {params.row.usuario}
          </div>
        );
      },
    },
    {
        field:"descripcion", 
        headerName:"Descripcion", 
        width: 230,
    },
    {
      field:"url_logo", 
      headerName:"Url Logo", 
      width: 230,
    },
    {
        field:"status", 
        headerName:"Status", 
        width: 160,
        renderCell:(params)=>{
            return (
                <div className={`cellWithStatus ${params.row.status}`}>
                    {params.row.status}
                </div>
            )
        }
    },
    {
      field:"creado_en", 
      headerName:"Creado_en", 
      width: 140,
    },
    {
      field:"actualizado_en", 
      headerName:"Actualizado_en", 
      width: 140,
    },
  ];

  export const product_variantsColumns = [
    { field: "id", headerName: "ID", width: 180 },
    {
      field: "titulo",
      headerName: "Titulo",
      width: 180,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {params.row.usuario}
          </div>
        );
      },
    },
    {
      field:"descripcion", 
      headerName:"Descripcion", 
      width: 230,
    },
    {
        field:"color", 
        headerName:"Color", 
        width: 140,
    },
    {
      field:"colorRGB", 
      headerName:"ColorRGB", 
      width: 80,
    },
    {
        field:"status", 
        headerName:"Status", 
        width: 160,
        renderCell:(params)=>{
            return (
                <div className={`cellWithStatus ${params.row.status}`}>
                    {params.row.status}
                </div>
            )
        }
    },
    {
      field:"creado_en", 
      headerName:"Creado_en", 
      width: 140,
    },
    {
      field:"actualizado_en", 
      headerName:"Actualizado_en", 
      width: 140,
    },
  ];