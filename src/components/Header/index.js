function Header(props) {
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <img src="/img/logo.svg" className="mr-10" />
        <div className="headerInfo" >
          <h3 className="text-uppercase">Yeezy Sneakers</h3>
          <p className="opacity-5">Мазазин редких кроссовок</p>
        </div>
      </div>
      <ul className="d-flex">
        <li className="mr-30 cu-p" onClick={props.onOpenCart}>
          <img src="/img/cart.svg" alt="Cart"/>
          <span>1205 руб.</span>
        </li>
        <li>
          <img src="/img/user.svg" alt="User"/>
        </li>
      </ul>
    </header>
  )
}

export default Header;