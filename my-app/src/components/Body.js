import ScheduleButton from "./ScheduleButton"
import StartDate from "./StartDate"
import EndDate from "./EndDate"
import TMA from "./TMA"
import TMB from "./TMB"
import ReportChoices from "./ReportChoices"
import RunReportsButton from "./RunReportsButton"


function Body() {
  return (
    <>
    <ScheduleButton />
    <StartDate />
    <EndDate />
    <TMA />
    <TMB />
    <ReportChoices />
    <RunReportsButton />
    </>
  )
}

export default Body