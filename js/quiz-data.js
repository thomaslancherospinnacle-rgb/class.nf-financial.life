// Complete Quiz Data for All 7 Modules
// 10 questions per module = 70 total questions

const allQuizData = {
    1: [
        {
            question: "Which of the following is TRUE about certificates of deposit (CDs)?",
            options: [
                "They can always be withdrawn instantly without penalty",
                "They have early withdrawal penalties and may not be instantly accessible",
                "They are the same as regular checking accounts",
                "They automatically pay out upon account holder's death"
            ],
            correct: 1,
            explanation: "CDs have early withdrawal penalties and are not instantly accessible, unlike regular checking accounts."
        },
        {
            question: "What is the PRIMARY purpose of a 401(k) plan?",
            options: [
                "To provide immediate cash after death",
                "To serve as an emergency fund",
                "To provide retirement income",
                "To pay funeral expenses"
            ],
            correct: 2,
            explanation: "401(k) plans are designed specifically to provide retirement income, not immediate cash needs."
        },
        {
            question: "After someone passes away, what is required to access their 401(k) funds?",
            options: [
                "Nothing—the money is instantly available",
                "A claim process, beneficiary verification, and distribution elections",
                "Only a phone call to the employer",
                "Just a death certificate"
            ],
            correct: 1,
            explanation: "Accessing 401(k) funds requires a complete claim process including verification and distribution choices."
        },
        {
            question: "What is the key difference between a Traditional IRA and a Roth IRA?",
            options: [
                "Traditional IRAs have no withdrawal rules",
                "Roth IRA withdrawals are tax-free (qualified), while Traditional IRA withdrawals are taxable",
                "Traditional IRAs are always better than Roth IRAs",
                "There is no difference"
            ],
            correct: 1,
            explanation: "The main difference is tax treatment: Roth IRAs offer tax-free qualified withdrawals, Traditional IRAs are taxable."
        },
        {
            question: "Why can't home equity immediately pay bills after a death?",
            options: [
                "Because equity is not cash—it requires refinancing or selling the home",
                "Because home equity doesn't exist",
                "Because banks automatically freeze home equity",
                "Because equity can only be used for retirement"
            ],
            correct: 0,
            explanation: "Equity is a paper value, not cash. Converting it requires refinancing (6-10 weeks) or selling (months)."
        },
        {
            question: "What must happen to investments in a brokerage account before they can be used as cash?",
            options: [
                "Nothing—they're already cash",
                "They must be transferred to a bank account",
                "They must be sold/liquidated to produce cash",
                "They must be reported to the IRS first"
            ],
            correct: 2,
            explanation: "Investments must be liquidated (sold) to convert them into usable cash."
        },
        {
            question: "Which statement is TRUE about trust-held investments?",
            options: [
                "Anyone can withdraw them at any time",
                "Access is controlled by the trustee and governed by trust terms",
                "They are always immediately liquid",
                "They don't require any documentation"
            ],
            correct: 1,
            explanation: "Trust assets are controlled by the trustee according to the trust document's specific terms."
        },
        {
            question: "What is a common challenge with business ownership as an asset?",
            options: [
                "It's always easy to sell quickly",
                "Shares may be illiquid and require professional valuation",
                "Business assets are tax-free",
                "Businesses automatically close when the owner dies"
            ],
            correct: 1,
            explanation: "Business interests are often illiquid, requiring time and professional valuation to convert to cash."
        },
        {
            question: "What typically happens to annuities if withdrawn during the surrender period?",
            options: [
                "No consequences—withdraw anytime",
                "Withdrawal penalties may apply",
                "The government takes ownership",
                "They automatically convert to cash"
            ],
            correct: 1,
            explanation: "Most annuities have surrender periods during which early withdrawals incur penalties."
        },
        {
            question: "What is the MOST important lesson from Module 1 about client assets?",
            options: [
                "All assets are instantly available as cash",
                "Clients don't need life insurance if they have any assets",
                "Assets have different access rules, timelines, and regulations—life insurance fills the gap",
                "Only retirement accounts matter"
            ],
            correct: 2,
            explanation: "The key lesson is that different assets have different access timelines, and life insurance fills the immediate gap."
        }
    ],
    2: [
        {
            question: "What does 'LIQUID' mean when referring to an asset?",
            options: [
                "It's immediately available as cash",
                "It can be converted to cash",
                "It's stored in a bank account",
                "It has no value"
            ],
            correct: 1,
            explanation: "Liquid means an asset CAN be converted to cash, but not necessarily immediately available."
        },
        {
            question: "What does 'AVAILABLE' mean when referring to an asset?",
            options: [
                "It exists somewhere",
                "It has monetary value",
                "It can be used RIGHT NOW",
                "It's in a retirement account"
            ],
            correct: 2,
            explanation: "Available means the asset can be accessed and used immediately, today, when needed."
        },
        {
            question: "How long does it typically take to access 401(k) funds after a death?",
            options: [
                "Immediately",
                "2-6 weeks",
                "6-12 months",
                "2-3 years"
            ],
            correct: 1,
            explanation: "401(k) funds typically require 2-6 weeks minimum for claim processing and distribution."
        },
        {
            question: "Why can't home equity immediately pay bills after a death?",
            options: [
                "Home equity doesn't exist",
                "It requires refinancing or selling, which takes months",
                "Banks don't allow it",
                "It's illegal to use home equity"
            ],
            correct: 1,
            explanation: "Accessing home equity requires either refinancing (6-10 weeks) or selling (3-12+ months)."
        },
        {
            question: "What is the 'T+2' settlement period for stocks?",
            options: [
                "Stocks take 2 months to sell",
                "Stocks settle 2 business days after sale",
                "You must wait 2 years to sell stocks",
                "Stocks are available in 2 hours"
            ],
            correct: 1,
            explanation: "T+2 means stocks settle 2 business days after the trade date."
        },
        {
            question: "How quickly does a life insurance death benefit typically pay out?",
            options: [
                "6-12 months",
                "30-60 days",
                "7-14 days",
                "24 hours"
            ],
            correct: 2,
            explanation: "Life insurance typically pays within 7-14 days of receiving all required documentation."
        },
        {
            question: "What is the main 'gap' that life insurance fills?",
            options: [
                "The gap between what people want and what they need",
                "The gap between when money is needed and when other assets become available",
                "The gap between rich and poor",
                "The gap in retirement savings"
            ],
            correct: 1,
            explanation: "Life insurance fills the timing gap between immediate needs and when other assets become accessible."
        },
        {
            question: "Which of the following is BOTH liquid AND immediately available?",
            options: [
                "401(k)",
                "Home equity",
                "Life insurance death benefit",
                "Real estate"
            ],
            correct: 2,
            explanation: "Life insurance provides both liquidity and immediate availability (7-14 days)."
        },
        {
            question: "What happens to investment values if the market is down when you need to sell?",
            options: [
                "Nothing—the value stays the same",
                "The government protects you from losses",
                "You may have to sell at a loss",
                "You cannot sell during a market downturn"
            ],
            correct: 2,
            explanation: "If you need to liquidate during a downturn, you may be forced to sell at a loss."
        },
        {
            question: "When are most monthly bills (mortgage, utilities, car payments) due?",
            options: [
                "Within 1-2 weeks of death",
                "After all assets are transferred",
                "Monthly, regardless of when death occurs",
                "Only when the estate is settled"
            ],
            correct: 2,
            explanation: "Bills continue on their normal schedule regardless of when someone passes away."
        }
    ],
    3: [
        {
            question: "What happens if someone's will says one thing but their 401(k) beneficiary form says something different?",
            options: [
                "The will always wins",
                "The beneficiary form wins",
                "They split the money 50/50",
                "The court decides"
            ],
            correct: 1,
            explanation: "Beneficiary designations on retirement accounts override what's written in a will."
        },
        {
            question: "If a bank account is owned by one person individually and they die, what typically happens?",
            options: [
                "The account immediately closes",
                "The money goes to the government",
                "The account goes through probate",
                "The bank keeps the money"
            ],
            correct: 2,
            explanation: "Individually-owned accounts without beneficiaries must go through the probate process."
        },
        {
            question: "What does 'T+2' mean for stock sales?",
            options: [
                "Stocks take 2 months to sell",
                "Stocks settle 2 business days after the sale",
                "You must wait 2 years",
                "Taxes are paid in 2 weeks"
            ],
            correct: 1,
            explanation: "T+2 is the settlement period—stocks settle 2 business days after the trade."
        },
        {
            question: "Which federal law governs most employer-sponsored retirement plans like 401(k)s?",
            options: [
                "The Social Security Act",
                "The Securities Act",
                "ERISA (Employee Retirement Income Security Act)",
                "The Banking Act"
            ],
            correct: 2,
            explanation: "ERISA governs most employer-sponsored retirement plans including 401(k)s."
        },
        {
            question: "Under the SECURE Act, how long do most non-spouse beneficiaries have to withdraw inherited IRA funds?",
            options: [
                "5 years",
                "10 years",
                "20 years",
                "There's no time limit"
            ],
            correct: 1,
            explanation: "The SECURE Act requires most non-spouse beneficiaries to withdraw inherited IRA funds within 10 years."
        },
        {
            question: "What is the typical timeline to SELL a house after someone dies?",
            options: [
                "1-2 weeks",
                "1-2 months",
                "3-6+ months",
                "10-15 years"
            ],
            correct: 2,
            explanation: "Selling real estate typically takes 3-6 months or longer, depending on market conditions."
        },
        {
            question: "What is a buy-sell agreement typically funded with?",
            options: [
                "Cash savings",
                "Life insurance",
                "Credit cards",
                "Home equity"
            ],
            correct: 1,
            explanation: "Buy-sell agreements are most commonly funded with life insurance to provide immediate liquidity."
        },
        {
            question: "If a property is owned as 'Joint Tenancy with Right of Survivorship,' what happens when one owner dies?",
            options: [
                "It goes through probate",
                "It automatically passes to the surviving owner",
                "The government takes it",
                "It must be sold immediately"
            ],
            correct: 1,
            explanation: "Joint tenancy with right of survivorship automatically transfers to the surviving owner."
        },
        {
            question: "Which type of IRA provides tax-free withdrawals (for qualified distributions)?",
            options: [
                "Traditional IRA",
                "SEP IRA",
                "Roth IRA",
                "SIMPLE IRA"
            ],
            correct: 2,
            explanation: "Roth IRAs provide tax-free qualified withdrawals, unlike Traditional IRAs."
        },
        {
            question: "How long does a typical life insurance claim take to pay out?",
            options: [
                "1-2 days",
                "7-14 days",
                "3-6 months",
                "1-2 years"
            ],
            correct: 1,
            explanation: "Most life insurance claims pay out within 7-14 days of receiving all required documents."
        }
    ],
    4: [
        {
            question: "When does income typically stop after a death?",
            options: [
                "After 30 days",
                "Immediately (Day 1)",
                "After 6 months",
                "After the funeral"
            ],
            correct: 1,
            explanation: "Income stops immediately when someone passes away—paychecks end right away."
        },
        {
            question: "How long does it typically take to receive a death certificate?",
            options: [
                "1-2 hours",
                "3-7 days",
                "3-4 weeks",
                "2-3 months"
            ],
            correct: 1,
            explanation: "Death certificates are usually available within 3-7 days from the medical examiner or funeral home."
        },
        {
            question: "When is the funeral payment typically due IN FULL?",
            options: [
                "Within 24 hours",
                "After insurance pays",
                "At or shortly after the service",
                "After 90 days"
            ],
            correct: 2,
            explanation: "Most funeral homes require payment in full at or shortly after the service."
        },
        {
            question: "What is the 'critical gap' after a death?",
            options: [
                "The gap between what people earn and spend",
                "The period between when income stops and when assets become available",
                "The gap in insurance coverage",
                "The difference between funeral costs and savings"
            ],
            correct: 1,
            explanation: "The critical gap is the time between when income stops and when other assets can be accessed."
        },
        {
            question: "When does the mortgage payment stop being due after a death?",
            options: [
                "Immediately",
                "After 30 days",
                "It doesn't—it's still due every month",
                "After the house is sold"
            ],
            correct: 2,
            explanation: "Mortgage payments continue to be due on schedule regardless of death."
        },
        {
            question: "How quickly does life insurance typically pay after a claim is filed?",
            options: [
                "24-48 hours",
                "7-14 days",
                "30-60 days",
                "3-6 months"
            ],
            correct: 1,
            explanation: "Life insurance typically pays within 7-14 days of receiving all required documentation."
        },
        {
            question: "When do most families need immediate cash after a death?",
            options: [
                "After 6 months",
                "After 1 year",
                "Within the first 2-4 weeks",
                "Never—they can wait"
            ],
            correct: 2,
            explanation: "Families need immediate cash for funeral expenses, bills, and living expenses within the first few weeks."
        },
        {
            question: "How long does it typically take to sell real estate after a death?",
            options: [
                "1-2 weeks",
                "1 month",
                "6-18+ months",
                "5-10 years"
            ],
            correct: 2,
            explanation: "Real estate sales typically take 6-18 months or longer from death to closing."
        },
        {
            question: "What continues even though income has stopped?",
            options: [
                "Only funeral expenses",
                "Monthly bills (mortgage, utilities, food, etc.)",
                "Nothing—bills stop too",
                "Only taxes"
            ],
            correct: 1,
            explanation: "All monthly bills and living expenses continue even though income has stopped."
        },
        {
            question: "When do retirement account distributions typically begin after a death?",
            options: [
                "Within 24 hours",
                "Within 1 week",
                "2-6 weeks minimum",
                "2-3 years"
            ],
            correct: 2,
            explanation: "Retirement account distributions typically begin 2-6 weeks after death at the earliest."
        }
    ],
    5: [
        {
            question: "When a client says 'I have a 401(k),' what is the BEST response?",
            options: [
                "401(k)s are terrible, you need life insurance instead",
                "That's great for retirement, but it takes 2-6 weeks to access after death. Life insurance fills that gap.",
                "You don't need a 401(k)",
                "Okay, you're all set then"
            ],
            correct: 1,
            explanation: "Acknowledge their asset, then educate on the timing gap that life insurance fills."
        },
        {
            question: "What key question should you ask when a client says 'We have savings'?",
            options: [
                "Why do you have savings?",
                "How many months of expenses does it cover?",
                "Can I see your bank statement?",
                "Savings don't matter"
            ],
            correct: 1,
            explanation: "Ask how long their savings would last to help them see the potential gap."
        },
        {
            question: "When a client mentions home equity, what's the key point to make?",
            options: [
                "Home equity is worthless",
                "You should sell your home",
                "Equity is not cash—it takes months to access through refinancing or selling",
                "Home equity is the best asset"
            ],
            correct: 2,
            explanation: "The key point is that equity is not liquid cash and requires months to convert."
        },
        {
            question: "Why do business owners often fund buy-sell agreements with life insurance?",
            options: [
                "Because it's required by law",
                "Because business value takes months/years to realize, but life insurance provides immediate cash",
                "Because they have to",
                "Because buy-sell agreements are free"
            ],
            correct: 1,
            explanation: "Life insurance provides immediate cash to fund buyouts, while business sales take months or years."
        },
        {
            question: "When a client says life insurance is 'too expensive,' what should you do?",
            options: [
                "Agree and walk away",
                "Ask what they think it costs, then show actual affordable rates",
                "Sell them the cheapest policy possible",
                "Tell them they're wrong"
            ],
            correct: 1,
            explanation: "Most people overestimate the cost—show them actual rates to overcome this objection."
        },
        {
            question: "What is the typical daily cost for a healthy 30-year-old to get $500K term life insurance?",
            options: [
                "$50/day",
                "$10/day",
                "About $1/day ($25-30/month)",
                "$100/day"
            ],
            correct: 2,
            explanation: "Term life insurance for young, healthy people is very affordable—about $1 per day."
        },
        {
            question: "When a client has investments, what risk should you highlight?",
            options: [
                "Investments are illegal",
                "Market risk—they may have to sell at a loss, plus liquidation takes time",
                "Investments never work",
                "There is no risk"
            ],
            correct: 1,
            explanation: "Highlight both market risk and the time required to liquidate investments."
        },
        {
            question: "What should you say when a client says 'My spouse works'?",
            options: [
                "Then you're fine",
                "Can the remaining income cover 100% of expenses if one income disappears?",
                "Your spouse should quit",
                "That doesn't matter"
            ],
            correct: 1,
            explanation: "Challenge them to think about whether one income can cover expenses designed for two incomes."
        },
        {
            question: "Why should young, healthy people buy life insurance?",
            options: [
                "Because they're going to die soon",
                "Because rates are cheapest when young/healthy, and health can change",
                "Because it's the law",
                "They shouldn't"
            ],
            correct: 1,
            explanation: "Rates are lowest when young and healthy—waiting means higher rates or potential uninsurability."
        },
        {
            question: "What is the goal when handling asset-based objections?",
            options: [
                "To prove the client wrong",
                "To show that life insurance COMPLEMENTS existing assets by filling the timing gap",
                "To replace all their assets with insurance",
                "To confuse the client"
            ],
            correct: 1,
            explanation: "Life insurance complements other assets—it doesn't replace them. Show how it fills the gap."
        }
    ],
    6: [
        {
            question: "In Case Study #1 (Dual Income Family), how long would $25,000 in savings likely last?",
            options: [
                "6-12 months",
                "2-3 months",
                "1 week",
                "2 years"
            ],
            correct: 1,
            explanation: "With typical expenses, $25,000 in savings might last only 2-3 months without income."
        },
        {
            question: "For the business owner (Case Study #2), what typically funds buy-sell agreements?",
            options: [
                "Credit cards",
                "Savings accounts",
                "Life insurance",
                "Home equity"
            ],
            correct: 2,
            explanation: "Buy-sell agreements are typically funded with life insurance for immediate liquidity."
        },
        {
            question: "How long does it take to sell a business after an owner's death?",
            options: [
                "1-2 weeks",
                "1-2 months",
                "6-24+ months",
                "5-10 years"
            ],
            correct: 2,
            explanation: "Business sales typically take 6-24 months or longer after an owner's death."
        },
        {
            question: "In Case Study #3, can $250,000 in home equity immediately pay the mortgage?",
            options: [
                "Yes, immediately",
                "No—equity is not cash and requires refinancing or selling",
                "Yes, but only half",
                "Only if the bank allows it"
            ],
            correct: 1,
            explanation: "Home equity is not cash—it requires refinancing or selling to access."
        },
        {
            question: "What risk does the investment portfolio family (Case Study #4) face?",
            options: [
                "No risk at all",
                "Market risk—investments may be down when they need to sell",
                "The investments will disappear",
                "Nothing—investments are perfect"
            ],
            correct: 1,
            explanation: "Market risk means they might have to sell investments at a loss during a downturn."
        },
        {
            question: "Why should Amanda (Case Study #5, age 28, no kids) consider life insurance?",
            options: [
                "She doesn't need it",
                "To cover student loans, final expenses, and lock in low rates while young",
                "Because it's required",
                "Only if she gets married"
            ],
            correct: 1,
            explanation: "Young people need life insurance to cover debts, final expenses, and lock in low rates."
        },
        {
            question: "What happens to life insurance rates as you age?",
            options: [
                "They decrease",
                "They stay the same",
                "They increase",
                "They're free after age 30"
            ],
            correct: 2,
            explanation: "Life insurance rates increase with age—locking in rates early saves money."
        },
        {
            question: "For the retiree (Case Study #6), why might life insurance still be valuable?",
            options: [
                "It's not—retirees don't need it",
                "To cover final expenses and create tax-free inheritance",
                "Because the government requires it",
                "Only for tax purposes"
            ],
            correct: 1,
            explanation: "Retirees need life insurance for final expenses and to leave a tax-free inheritance."
        },
        {
            question: "What is the first step in handling any client objection?",
            options: [
                "Argue with the client",
                "Listen and acknowledge their situation",
                "Sell immediately",
                "Walk away"
            ],
            correct: 1,
            explanation: "Always listen first and acknowledge their situation before educating."
        },
        {
            question: "What is the key message across all case studies?",
            options: [
                "Life insurance replaces all other assets",
                "Life insurance is expensive",
                "Life insurance complements existing assets by filling the timing gap",
                "Only young people need life insurance"
            ],
            correct: 2,
            explanation: "The key message is that life insurance complements other assets by providing immediate liquidity."
        }
    ],
    7: [
        {
            question: "How quickly does life insurance typically pay out?",
            options: [
                "1-2 days",
                "7-14 days",
                "30-60 days",
                "6-12 months"
            ],
            correct: 1,
            explanation: "Life insurance typically pays within 7-14 days of receiving all required documentation."
        },
        {
            question: "What is a good quick response when a client says 'I have a 401(k)'?",
            options: [
                "401(k)s are worthless",
                "Great for retirement. Takes 2-6 weeks to access after death. Life insurance fills that gap.",
                "You don't need a 401(k)",
                "Okay, thanks for your time"
            ],
            correct: 1,
            explanation: "Acknowledge their asset, educate on timing, and position life insurance as the gap-filler."
        },
        {
            question: "What should you ask a client who says 'It's too expensive'?",
            options: [
                "You're right, goodbye",
                "What do you think it costs? (then show actual affordable rates)",
                "Money doesn't matter",
                "Nothing—just walk away"
            ],
            correct: 1,
            explanation: "Most people overestimate cost—showing actual rates often overcomes this objection."
        },
        {
            question: "What is the 6-step objection framework?",
            options: [
                "Listen, Acknowledge, Clarify, Educate, Position, Close",
                "Talk, Argue, Win, Close, Leave, Follow-up",
                "Listen, Agree, Sell, Close, Done, Next",
                "There is no framework"
            ],
            correct: 0,
            explanation: "The framework is: Listen, Acknowledge, Clarify, Educate, Position, Close."
        },
        {
            question: "What is the average funeral cost?",
            options: [
                "$1,000-$2,000",
                "$8,000-$15,000",
                "$50,000-$75,000",
                "$100,000+"
            ],
            correct: 1,
            explanation: "Average funeral costs range from $8,000 to $15,000."
        },
        {
            question: "How much does $500,000 of term life insurance cost for a healthy 30-year-old?",
            options: [
                "$500/month",
                "$100/day",
                "About $25-30/month (~$1/day)",
                "$1,000/week"
            ],
            correct: 2,
            explanation: "Term life insurance for young, healthy individuals costs about $1 per day."
        },
        {
            question: "What should you keep in your car, office, and phone?",
            options: [
                "Nothing",
                "Quick reference cheat sheets",
                "Only business cards",
                "Lunch"
            ],
            correct: 1,
            explanation: "Keep quick reference materials readily available for client conversations."
        },
        {
            question: "What is a good closing question?",
            options: [
                "Do you want insurance or not?",
                "How would your family pay the mortgage on the 1st if something happened to you?",
                "Can I have your money?",
                "Are you scared of dying?"
            ],
            correct: 1,
            explanation: "Create urgency by asking how specific bills would be paid without income."
        },
        {
            question: "What is the purpose of an elevator pitch?",
            options: [
                "To sell insurance in an elevator",
                "To give a clear, concise explanation of what you do in 30 seconds",
                "To avoid talking to clients",
                "To confuse people"
            ],
            correct: 1,
            explanation: "An elevator pitch is a concise 30-second explanation of your value proposition."
        },
        {
            question: "What is the MAIN takeaway from all 7 modules?",
            options: [
                "Life insurance is the only asset that matters",
                "All other assets are worthless",
                "Life insurance complements existing assets by filling the timing gap between death and asset availability",
                "Everyone should only have life insurance"
            ],
            correct: 2,
            explanation: "Life insurance complements other assets—it fills the critical timing gap when families need immediate cash."
        }
    ]
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = allQuizData;
}
