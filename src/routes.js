export default [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('./views/Login.vue'),
  },
  {
    path: '/secret',
    component: () => import('./views/Secret/Secret.vue'),
    meta: { requiresAuth: true },
    children: [
      {
        path: 'notes',
        component: () => import('./views/Secret/Notes.vue')
      },
      {
        path: 'clientes',
        name: 'clientes',
        component: () => import('./views/Secret/Clientes.vue')
      },
      {
        path: 'soportes',
        name: 'soportes',
        component: () => import('./views/Secret/Soportes.vue')
      },
      {
        path: 'soportes/create',
        name: 'soportes-create',
        component: () => import('./views/Secret/SoporteCreate.vue')
      },
      {
        path: 'soportes/:id/update',
        name: 'soportes-update',
        component: () => import('./views/Secret/SoporteUpdate.vue')
      },
      {
        path: 'clientes/creatge',
        component: () => import('./views/Secret/ClienteCreate1.vue')
      },
      {
        path: 'clientes1/create',
        name: 'cliente1-create',
        component: () => import('./views/Secret/Cliente1Create.vue')
      },
      {
        path: 'clientes/:id/update',
        name: 'clientes-update',
        component: () => import('./views/Secret/ClienteUpdate.vue')
      },
      {
        path: 'usuarios',
        name: 'usuarios',
        component: () => import('./views/Secret/Usuarios.vue')
      },
      {
        path: 'usuarios/create',
        name: 'usuarios-create',
        component: () => import('./views/Secret/UsuarioCreate.vue')
      },
      {
        path: 'usuarios/:id/update',
        name: 'usuarios-update',
        component: () => import('./views/Secret/UsuarioUpdate.vue')
      },
      {
        path: 'routers',
        name: 'routers',
        component: () => import('./views/Secret/Routers.vue')
      },
      {
        path: 'routers/create',
        name: 'routers-create',
        component: () => import('./views/Secret/RouterCreate.vue')
      },
      {
        path: 'routers/:id/update',
        name: 'routers-update',
        component: () => import('./views/Secret/RouterUpdate.vue')
      },
      {
        path: 'contratos',
        name: 'contratos',
        component: () => import('./views/Secret/Contratos.vue')
      },
      {
        path: 'contratos/create',
        name: 'contratos-create',
        component: () => import('./views/Secret/ContratoCreate.vue')
      },
      {
        path: 'contratos/:id/update',
        name: 'contratos-update',
        component: () => import('./views/Secret/ContratoUpdate.vue')
      },
      {
        path: 'empleos',
        name: 'empleos',
        component: () => import('./views/Secret/Empleos.vue')
      },
      {
        path: 'empleos/create',
        name: 'empleos-create',
        component: () => import('./views/Secret/EmpleoCreate.vue')
      },
      {
        path: 'empleos/:id/update',
        name: 'empleos-update',
        component: () => import('./views/Secret/EmpleoUpdate.vue')
      },
      {
        path: 'recargos',
        name: 'recargos',
        component: () => import('./views/Secret/Recargos.vue')
      },
      {
        path: 'recargos/create',
        name: 'recargos-create',
        component: () => import('./views/Secret/RecargoCreate.vue')
      },
      {
        path: 'recargos/:id/update',
        name: 'recargos-update',
        component: () => import('./views/Secret/RecargoUpdate.vue')
      },
      {
        path: 'registros',
        name: 'registros',
        component: () => import('./views/Secret/Registros.vue')
      },
      {
        path: 'registros/create',
        name: 'registros-create',
        component: () => import('./views/Secret/RegistroCreate.vue')
      },
      {
        path: 'registros/:id/update',
        name: 'registros-update',
        component: () => import('./views/Secret/RegistroUpdate.vue')
      },
      {
        path: 'sucursales',
        name: 'sucursales',
        component: () => import('./views/Secret/Sucursales.vue')
      },
      {
        path: 'sucursales/create',
        name: 'sucursales-create',
        component: () => import('./views/Secret/SucursalCreate.vue')
      },
      {
        path: 'sucursales/:id/update',
        name: 'sucursales-update',
        component: () => import('./views/Secret/SucursalUpdate.vue')
      },
      {
        path: 'productos',
        name: 'productos',
        component: () => import('./views/Secret/Productos.vue')
      },
      {
        path: 'clientespagos',
        name: 'clientespagos',
        component: () => import('./views/Secret/ContratosPagos.vue')
      },
      {
        path: 'clientespagosupdate',
        name: 'clientespagosupdate',
        component: () => import('./views/Secret/ContratoPagoUpdate.vue')
      },
    ]
  }
]