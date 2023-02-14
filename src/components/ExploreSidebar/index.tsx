import { useState } from 'react'
import { MdClose, MdFilterList } from 'react-icons/md'

import Heading from 'components/Heading'
import Button from 'components/Button'
import Checkbox from 'components/Checkbox'
import Radio from 'components/Radio'

import * as S from './styles'

type Field = {
  label: string
  name: string
}

export type ItemProps = {
  title: string
  name: string
  type: string
  fields: Field[]
}

type Values = {
  [field: string]: boolean | string
}

export type ExploreSidebarProps = {
  items: ItemProps[]
  onFilter: (values: Values) => void
  initialValues?: Values
}

function ExploreSidebar({
  items,
  onFilter,
  initialValues = {}
}: ExploreSidebarProps) {
  const [areFiltersOpen, setAreFiltersOpen] = useState<boolean>(false)
  const [values, setValues] = useState<Values>(initialValues)

  function handleChange(name: string, value: string | boolean) {
    setValues((prevState) => ({ ...prevState, [name]: value }))
  }

  function handleFilter() {
    onFilter(values)
    setAreFiltersOpen(false)
  }

  return (
    <S.Wrapper isOpen={areFiltersOpen}>
      <S.Overlay aria-hidden={areFiltersOpen} />
      <S.IconWrapper>
        <MdFilterList
          aria-label="open filters menu"
          onClick={() => setAreFiltersOpen(true)}
        />
        <MdClose
          aria-label="close filters menu"
          onClick={() => setAreFiltersOpen(false)}
        />
      </S.IconWrapper>

      <S.Content>
        {items.map((item) => (
          <S.Items key={item.title}>
            <Heading
              lineBottom
              lineColor="secondary"
              size="small"
              color="white"
            >
              {item.title}
            </Heading>

            {item.type === 'checkbox' &&
              item.fields.map((field) => (
                <Checkbox
                  key={field.name}
                  name={field.name}
                  label={field.label}
                  labelFor={field.name}
                  isChecked={Boolean(values[field.name])}
                  onCheck={(value) => handleChange(field.name, value)}
                />
              ))}

            {item.type === 'radio' &&
              item.fields.map((field) => (
                <Radio
                  key={field.name}
                  id={field.name}
                  name={item.name}
                  label={field.label}
                  labelFor={field.name}
                  value={field.name}
                  defaultChecked={field.name === values[item.name]}
                  onChange={() => handleChange(item.name, field.name)}
                />
              ))}
          </S.Items>
        ))}
      </S.Content>

      <S.Footer>
        <Button fullWidth size="medium" onClick={handleFilter}>
          Filter
        </Button>
      </S.Footer>
    </S.Wrapper>
  )
}

export default ExploreSidebar
