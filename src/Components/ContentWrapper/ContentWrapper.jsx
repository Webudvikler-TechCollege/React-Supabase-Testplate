/**
 * Udskriver sidetitel, descriptiob og
 * h1 og h2 overskrifter på sider
 * @param {*} props
 * @returns
 */
import { Link } from "react-router-dom"
import { ContentWrapperStyle } from "./ContentWrapper.style"

export const ContentWrapper = ({title,subtitle,description,children}) => {
  // Sætter page title
  document.title = title

  // Sætter page description hvis der en
  if (description) {
    document
      .querySelector('meta[name="description"]')
      .setAttribute("content", description)
  }

  return (
    <ContentWrapperStyle>
      <section>
        <div>
          <h1>{title}</h1>
          {subtitle && <h3>{subtitle}</h3>}
        </div>
      </section>
      <div>{children}</div>
      <p><Link to="/">Tilbage til forsiden</Link></p>
    </ContentWrapperStyle>
  )
}
