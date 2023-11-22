// Below is a custom component, you can import it into your document
// @ts-ignore
import { Helmet } from 'rspress/runtime'

export function MetaTags(title: string, description: string) {
  return (
    <Helmet>
      <meta property="og:title" value={title} />
      <meta property="og:description" value={description} />
      <meta
        property="og:image"
        value={`https://og.mozart409.com/api/image?fileType=svg&layoutName=blog&Title=${title}&Author=Amadeus+Mader&Theme=dark`}
      />
      <meta property="og:type" value="website" />
      <meta property="og:author" value="Amadeus Mader" />
    </Helmet>
  )
}
