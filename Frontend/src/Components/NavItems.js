import { Link } from "react-router-dom";

const items = [
    {
    label: <Link to='/'> Home </Link>,
    icon: 'pi pi-home',
},
{
    label: <Link to='/Products'> Products </Link>,
    icon: 'pi pi-shop',
},

{
    label: 'Contact',
    icon: 'pi pi-phone'
}
];

export default items