import { lazy } from "react"

const LazyComponent = (parentDirectory,Module)=> {
  return lazy(()=> import(`../${parentDirectory}/${Module}`));
}

export const RouterMap =[
  {
    path: '/',
    Component: LazyComponent('layout', 'Common'),
    children:  [{
     path:'main',
     Component: LazyComponent('page', 'Main')
    },
    {
     path: 'contact',
     Component: LazyComponent('page', 'Contact')
    },
    {
      path: 'home',
      Component: LazyComponent('page', 'Home'),
    },{
      path :'login',
      Component : LazyComponent('page', 'Login')
    }]
  },{
    path: 'user',
    

  }
]



