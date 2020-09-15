import Link from "next/link";

const linkStyle = {
  marginRight: 15,
};

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle} href="/">
        Home
      </a>
    </Link>

    <Link href="/about">
      <a style={linkStyle} href="/">
        About
      </a>
    </Link>
  </div>
);

export default Header;
