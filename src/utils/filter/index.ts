import { ItemProps } from 'components/ExploreSidebar'
import { ParsedUrlQueryInput } from 'querystring'

type ParseArgs = {
  queryString: ParsedUrlQueryInput
  filterItems: Pick<ItemProps, 'type' | 'name'>[]
}

export function parseQueryStringToWhereJson({
  queryString,
  filterItems
}: ParseArgs) {
  const json: {
    [key: string]: string | { name_contains: string }
  } = {}

  Object.keys(queryString)
    .filter((item) => item !== 'sort')
    .forEach((key) => {
      const item = filterItems?.find((item) => item.name === key)
      const isCheckboxType = item?.type === 'checkbox'

      json[key] = !isCheckboxType
        ? (queryString[key] as string)
        : { name_contains: queryString[key] as string }
    })

  return json
}

export function parseQueryStringToFilter({
  filterItems,
  queryString
}: ParseArgs) {
  const json: {
    [key: string]: string | string[]
  } = {}

  Object.keys(queryString).forEach((key) => {
    const item = filterItems?.find((item) => item.name === key)
    const isCheckbox = item?.type === 'checkbox'
    const isArray = Array.isArray(queryString[key])

    json[key] =
      !isArray && isCheckbox
        ? ([queryString[key]] as string[])
        : (queryString[key] as string)
  })

  return json
}
