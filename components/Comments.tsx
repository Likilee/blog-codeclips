import Giscus, { type Theme } from '@giscus/react'
import { useTheme } from 'next-themes'

type DefaultThemeType = Extract<
  Theme,
  | 'light'
  | 'light_high_contrast'
  | 'light_protanopia'
  | 'light_tritanopia'
  | 'dark'
  | 'dark_high_contrast'
  | 'dark_protanopia'
  | 'dark_tritanopia'
  | 'dark_dimmed'
  | 'preferred_color_scheme'
  | 'transparent_dark'
  | 'noborder_light'
  | 'noborder_dark'
  | 'cobalt'
>

{/* <script src="https://giscus.app/client.js"
        data-repo="Likilee/blog-codeclips"
        data-repo-id="R_kgDOMTQhIA"
        data-category="Comments"
        data-category-id="DIC_kwDOMTQhIM4CgorH"
        data-mapping="title"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="1"
        data-input-position="top"
        data-theme="preferred_color_scheme"
        data-lang="ko"
        data-loading="lazy"
        crossorigin="anonymous"
        async>
</script> */}

export default function Comments() {
  const { resolvedTheme } = useTheme()

  return (
    <Giscus
      id="comments"
      repo="Likilee/blog-codeclips"
      repoId="R_kgDOMTQhIA"
      category="Comments"
      categoryId="DIC_kwDOIyOubs4CX_Nw"
      mapping="pathname"
      strict="0"
      reactions-enabled="1"
      emit-metadata="0"
      input-position="top"
      theme={
        resolvedTheme === 'dark'
          ? ('transparent_dark' satisfies DefaultThemeType)
          : ('noborder_light' satisfies DefaultThemeType)
      }
      lang="ko"
      loading="lazy"
      inputPosition="top"
    />
  )
}
