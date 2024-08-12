import { TopNavStyle } from "./TopNav.style"

export const TopNav = () => {
  return (
    <TopNavStyle>
      <ul>
        <li><a href="/">FORSIDE</a></li>
        <li><a href="/lineup">LINEUP</a></li>
        <li><a href="/program">PROGRAM</a></li>
        <li><a href="/camps">CAMPS</a></li>
        <li><a href="/uploadfile">UPLOADFILE</a></li>
        <li><a href="/info">INFO</a></li>
        <li><a href="/tickets">KØB BILLET</a></li>
        <li><a href="/login">LOGIN</a></li>
      </ul>
    </TopNavStyle>
  )
}
