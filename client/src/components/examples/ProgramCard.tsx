import ProgramCard from '../ProgramCard'

export default function ProgramCardExample() {
  return (
    <div className="max-w-sm">
      <ProgramCard
        id="1"
        name="IBEW Local Union 26"
        trade="Electrical"
        description="5-year electrical apprenticeship program with 8,000 hours of on-the-job training and 900 hours of classroom instruction."
        location="DC/MD/VA"
        nextDeadline="March 31, 2025"
        phone="(301) 725-2400"
        email="info@ibew26.org"
        website="https://ibew26.org"
      />
    </div>
  )
}
