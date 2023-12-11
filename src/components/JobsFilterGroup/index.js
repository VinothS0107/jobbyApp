import './index.css'

// These are the lists used in the application. You can move them to any component needed.
const employmentTypesList = [
  {
    label: 'Full Time',
    employmentTypeId: 'FULLTIME',
  },
  {
    label: 'Part Time',
    employmentTypeId: 'PARTTIME',
  },
  {
    label: 'Freelance',
    employmentTypeId: 'FREELANCE',
  },
  {
    label: 'Internship',
    employmentTypeId: 'INTERNSHIP',
  },
]

const salaryRangesList = [
  {
    salaryRangeId: '1000000',
    label: '10 LPA and above',
  },
  {
    salaryRangeId: '2000000',
    label: '20 LPA and above',
  },
  {
    salaryRangeId: '3000000',
    label: '30 LPA and above',
  },
  {
    salaryRangeId: '4000000',
    label: '40 LPA and above',
  },
]

const location = [
  {locationId: 'Hyderabad', label: 'Hyderabad'},
  {locationId: 'Bangalore', label: 'Bangalore'},
  {locationId: 'Chennai', label: 'Chennai'},
  {locationId: 'Delhi', label: 'Delhi'},
  {locationId: 'Mumbai', label: 'Mumbai'},
]

const JobsFiltersGroup = props => {
  const renderEmploymentTypesList = () => {
    const {updateEmploymentTypesChecked} = props

    return employmentTypesList.map(eachType => {
      const updateTypeslist = () =>
        updateEmploymentTypesChecked(eachType.employmentTypeId)

      return (
        <li className="fliters-list-item" key={eachType.employmentTypeId}>
          <input
            type="checkbox"
            className="checkbox-input"
            id={eachType.employmentTypeId}
            onChange={updateTypeslist}
          />
          <label htmlFor={eachType.employmentTypeId} className="filter-label">
            {eachType.label}
          </label>
        </li>
      )
    })
  }

  const renderEmploymentTypes = () => (
    <>
      <h1 className="filter-heading">Type of Employment</h1>
      <ul className="filters-list">{renderEmploymentTypesList()}</ul>
    </>
  )

  const renderSalaryRangesList = () => {
    const {updateSalaryRangeId, activeSalaryRangeId} = props

    return salaryRangesList.map(eachRange => {
      const onChangeRange = () => updateSalaryRangeId(eachRange.salaryRangeId)

      const isChecked = eachRange.salaryRangeId === activeSalaryRangeId

      return (
        <li className="fliters-list-item" key={eachRange.salaryRangeId}>
          <input
            type="radio"
            className="checkbox-input"
            id={eachRange.salaryRangeId}
            name="salary ranges"
            onChange={onChangeRange}
            checked={isChecked}
          />
          <label htmlFor={eachRange.salaryRangeId} className="filter-label">
            {eachRange.label}
          </label>
        </li>
      )
    })
  }

  const renderSalaryRangesTypes = () => (
    <>
      <h1 className="filter-heading">Salary Range</h1>
      <ul className="filters-list">{renderSalaryRangesList()}</ul>
    </>
  )

  const renderLocationType = () => {
    const {onChooseLocation} = props

    const onClickLocation = event => {
      onChooseLocation(event)
    }

    return (
      <ul className="filters-list">
        {location.map(eachLocation => (
          <li className="fliters-list-item" key={eachLocation.locationId}>
            <input
              type="checkbox"
              className="checkbox-input"
              id={eachLocation.locationId}
              name="salary ranges"
              onClick={onClickLocation}
              value={eachLocation.locationId}
            />
            <label htmlFor={eachLocation.locationId} className="filter-label">
              {eachLocation.label}
            </label>
          </li>
        ))}
      </ul>
    )
  }

  return (
    <div className="filters-group-container">
      {renderEmploymentTypes()}
      <hr className="separator" />
      {renderSalaryRangesTypes()}
      <hr className="separator" />
      {renderLocationType()}
    </div>
  )
}

export default JobsFiltersGroup
