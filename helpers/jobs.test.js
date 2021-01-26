import { sortJobGroups, sortJobItems } from './jobs'

test('Sort jobs by group: asc', () => {
  const groups = [
    { name: 'Fountain Valley Rgnl Hosp And Med Ctr - Euclid' },
    { name: 'Stanislaus Surgical Hospital' },
    { name: 'Eastside Medical Center' }
  ]
  const res = [
    { name: 'Eastside Medical Center' },
    { name: 'Fountain Valley Rgnl Hosp And Med Ctr - Euclid' },
    { name: 'Stanislaus Surgical Hospital' }
  ]
  expect(sortJobGroups(groups, 'asc')).toEqual(res)
})

test('Sort jobs by group: desc', () => {
  const groups = [
    { name: 'Fountain Valley Rgnl Hosp And Med Ctr - Euclid' },
    { name: 'Stanislaus Surgical Hospital' },
    { name: 'Eastside Medical Center' }
  ]
  const res = [
    { name: 'Stanislaus Surgical Hospital' },
    { name: 'Fountain Valley Rgnl Hosp And Med Ctr - Euclid' },
    { name: 'Eastside Medical Center' }
  ]
  expect(sortJobGroups(groups, 'desc')).toEqual(res)
})

test('Sort jobs items by { Role: asc, Department: desc }', () => {
  const items = [
    {
      job_title: 'Ambulatory Pacu Nurse',
      department: ['Medicine', 'Urology'],
    },
    {
      job_title: 'Occupational Nurse Practitioner',
      department: ['Pain Assessment and PCA', 'De-escalation (Mental Health)'],
    },
    {
      job_title: 'Nurse Researcher',
      department: ['Head and Neck Surgery', 'Pathology & Laboratory Medicine'],
    },
    {
      job_title: 'Occupational Nurse Practitioner',
      department: ['Head and Neck Surgery', 'Pathology & Laboratory Medicine'],
    },
  ]
  const sorting = { Role: 'asc', Department: 'desc' }
  const res = [
    {
      job_title: 'Ambulatory Pacu Nurse',
      department: ['Medicine', 'Urology'],
    },
    {
      job_title: 'Nurse Researcher',
      department: ['Head and Neck Surgery', 'Pathology & Laboratory Medicine'],
    },
    {
      job_title: 'Occupational Nurse Practitioner',
      department: ['Pain Assessment and PCA', 'De-escalation (Mental Health)'],
    },
    {
      job_title: 'Occupational Nurse Practitioner',
      department: ['Head and Neck Surgery', 'Pathology & Laboratory Medicine'],
    },
  ]
  expect(sortJobItems(items, sorting)).toEqual(res)
})

test('Sort jobs items by { Role: desc, Department: asc }', () => {
  const items = [
    {
      job_title: 'Ambulatory Pacu Nurse',
      department: ['Medicine', 'Urology'],
    },
    {
      job_title: 'Occupational Nurse Practitioner',
      department: ['Pain Assessment and PCA', 'De-escalation (Mental Health)'],
    },
    {
      job_title: 'Nurse Researcher',
      department: ['Head and Neck Surgery', 'Pathology & Laboratory Medicine'],
    },
    {
      job_title: 'Occupational Nurse Practitioner',
      department: ['Head and Neck Surgery', 'Pathology & Laboratory Medicine'],
    },
  ]
  const sorting = { Role: 'desc', Department: 'asc' }
  const res = [
    {
      job_title: 'Occupational Nurse Practitioner',
      department: ['Head and Neck Surgery', 'Pathology & Laboratory Medicine'],
    },
    {
      job_title: 'Occupational Nurse Practitioner',
      department: ['Pain Assessment and PCA', 'De-escalation (Mental Health)'],
    },
    {
      job_title: 'Nurse Researcher',
      department: ['Head and Neck Surgery', 'Pathology & Laboratory Medicine'],
    },
    {
      job_title: 'Ambulatory Pacu Nurse',
      department: ['Medicine', 'Urology'],
    },
  ]
  expect(sortJobItems(items, sorting)).toEqual(res)
})

test('Sort jobs items by { Role: asc, Department: asc, Experience: desc, Education: asc }', () => {
  const items = [
    {
      job_title: 'Ambulatory Pacu Nurse',
      experience: 'Internship',
      department: ['Medicine', 'Urology'],
      required_skills: ['Staple removal', 'Fluid Balance – Monitoring']
    },
    {
      job_title: 'Ambulatory Pacu Nurse',
      experience: 'Internship',
      department: ['Medicine', 'Urology'],
      required_skills: ['Fluid Balance – Monitoring', 'Staple removal']
    },
    {
      job_title: 'Occupational Nurse Practitioner',
      experience: 'Junior',
      department: ['Pain Assessment and PCA', 'De-escalation (Mental Health)'],
      required_skills: ['Staple removal', 'Incident Report']
    },
    {
      job_title: 'Nurse Researcher',
      experience: 'Senior',
      department: ['Head and Neck Surgery', 'Pathology & Laboratory Medicine'],
      required_skills: ['CVP Measurement with Manometer', 'Grief Support for Patients and Family']
    },
    {
      job_title: 'Nurse Researcher',
      experience: 'Intermediate',
      department: ['Head and Neck Surgery', 'Pathology & Laboratory Medicine'],
      required_skills: ['CVP Measurement with Manometer', 'Grief Support for Patients and Family']
    },
    {
      job_title: 'Occupational Nurse Practitioner',
      experience: 'Junior',
      department: ['Head and Neck Surgery', 'Pathology & Laboratory Medicine'],
      required_skills: ['Staple removal', 'Incident Report']
    },
  ]
  const sorting = { Role: 'asc', Department: 'asc', Experience: 'desc', Education: 'asc' }
  const res = [
    {
      job_title: 'Ambulatory Pacu Nurse',
      experience: 'Internship',
      department: ['Medicine', 'Urology'],
      required_skills: ['Fluid Balance – Monitoring', 'Staple removal']
    },
    {
      job_title: 'Ambulatory Pacu Nurse',
      experience: 'Internship',
      department: ['Medicine', 'Urology'],
      required_skills: ['Staple removal', 'Fluid Balance – Monitoring']
    },
    {
      job_title: 'Nurse Researcher',
      experience: 'Senior',
      department: ['Head and Neck Surgery', 'Pathology & Laboratory Medicine'],
      required_skills: ['CVP Measurement with Manometer', 'Grief Support for Patients and Family']
    },
    {
      job_title: 'Nurse Researcher',
      experience: 'Intermediate',
      department: ['Head and Neck Surgery', 'Pathology & Laboratory Medicine'],
      required_skills: ['CVP Measurement with Manometer', 'Grief Support for Patients and Family']
    },
    {
      job_title: 'Occupational Nurse Practitioner',
      experience: 'Junior',
      department: ['Head and Neck Surgery', 'Pathology & Laboratory Medicine'],
      required_skills: ['Staple removal', 'Incident Report']
    },
    {
      job_title: 'Occupational Nurse Practitioner',
      experience: 'Junior',
      department: ['Pain Assessment and PCA', 'De-escalation (Mental Health)'],
      required_skills: ['Staple removal', 'Incident Report']
    },
  ]
  expect(sortJobItems(items, sorting)).toEqual(res)
})
