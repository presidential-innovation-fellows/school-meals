/**
 * Created by errenlester on 9/12/16.
 */

/*
    This is a file that contains test data that you can import into the USDA Free Lunch app

    You can then speed through the app without doing any typing!!

    testData is a collection of Scenarios (ie Scenario1, Scenario2, Scenario3 )

    Each scenario has a representation of the data / responses to the application questions for
    adults, students, and other children in the household.

    To use testData:
      1. in debug.js , update your scenario (or add new scenarios) to test
      2. in ApplicationData.js , import { testData } from ../debug
      3. make sure that you set const DEBUG = true;
      4. within the constructor for the class Application Data, you import to all collections

            testDataScenario = "<insert your scenario name here>"; (example: OneAdult_OneStudent)

            the rest of the code in the constructor will automatically
            inject your scenario data into the following collections for the app
            - Adults
            - Students
            - OtherChildren
            - Contact
            - Signature
 */


export const testData = {
  /*
      Scenario: OneAdult_OneStudent

      This scenario tests application input from a single parent with a single child
      Parent currently only has income from a single Salary/Wage job. Child has no income.
      Child is also not enrolled in any existing programs.
  */
  OneAdult_OneStudent: {

    signature: {
      hasSsn : true,
      ssnLastFour: '1234'
    },
    contact: {
      phone: '123-123-1234',
      address1: '123 Lala Lane',
      address2: '',
      city: 'Washington',
      state: 'DC',
      zip: '20009',
      email: 'test@test.tst'
    },
    adults: {
      items: [
        {
          id: "ByQHLUtH2",
          isAdult: true,
          isAttestor: true,
          firstName: 'Erren',
          middleName: '',
          lastName: 'Lester',
          suffix: '',
          incomeTypes: {
            military: {
              isApplicable: false
            },
            employment: {
              isApplicable: true,
              sources: {
                salaryWages: {
                  has: true,
                  amount: 1000,
                  frequency: 'monthly',
                  hourlyHours : '',
                  hourlyPeriod : '',
                  hasMore: null,
                  more: []
                },
                commission: {
                  has: false
                },
                cashBonus: {
                  has: false
                },
                tips: {
                  has: false
                },
                selfEmployment: {
                  has: false
                }
              }
            },
            publicAssistance: {
              isApplicable: false
            },
            retirement: {
              isApplicable: false
            },
            spousal: {
              isApplicable: false
            },
            unemployment: {
              isApplicable: false
            },
            other: {
              isApplicable: false
            }
          }
        }
      ]
    },
    students: {
      items: [
        {
          id: "rJcdDtHn",
          isChild: true,
          isStudent: true,
          firstName: 'Ellington',
          middleName: 'Samuel',
          lastName: 'Lester',
          suffix: '',
          school: 'Martin Luther King, Jr Elementary',
          grade: '1',
          isFoster: false,
          isHomeless: false,
          isMigrant: false,
          isRunaway: false,
          demographics: {
            isNativeAmerican: null,
            isAsian: null,
            isBlack: true,
            isPacificIslander: null,
            isWhite: null,
            isHispanicLatino: false
          },
          incomeTypes: {
            child: {
              isApplicable: false
            }
          }
        }
      ]
    },
    otherChildren: {
      items: []
    }
  }
}


