const renderCard = (jobInfo) => {
    const { id, title, enterprise, location, descrition, modalities } = jobInfo

    const vacancyJobSection = document.querySelector('.vacancy-job-section')

    const cardVacancyContainer = document.createElement('div')
    cardVacancyContainer.classList.add('card-vacancy')
    cardVacancyContainer.classList.add('container')
    cardVacancyContainer.setAttribute('id', id)

    const h3Position = document.createElement('h3')
    h3Position.innerText = (title)

    const locationCompany = document.createElement('div')
    locationCompany.classList.add('location-company-div')

    const smallCompany = document.createElement('small')
    smallCompany.innerText = (enterprise)

    const smallLocation = document.createElement('small')
    smallLocation.innerText = (location)

    const paragraphCard = document.createElement('p')
    paragraphCard.classList.add('paragraph')
    paragraphCard.innerText = (descrition)

    const divSmallTagButton = document.createElement('div')
    divSmallTagButton.classList.add('small-button')

    modalities.forEach(item => {
        const smallTag = document.createElement('small')
        smallTag.classList.add('tag')
        smallTag.innerText = (item)
        divSmallTagButton.append(smallTag)
    })

    

    const buttonBrand = document.createElement('button')
    buttonBrand.classList.add('button-brand')
    buttonBrand.setAttribute('id', 'apply-button-id')
    buttonBrand.type = ('submit')
    buttonBrand.innerText = ('Candidatar')

    locationCompany.append(smallCompany, smallLocation)
    divSmallTagButton.append(buttonBrand)
    cardVacancyContainer.append(h3Position, locationCompany, paragraphCard, divSmallTagButton)
    vacancyJobSection.appendChild(cardVacancyContainer)



    return vacancyJobSection


}


function creatCards(arrObject) {
    arrObject.forEach(item => {
        renderCard(item)
    })
}
creatCards(jobsData)


/* const asideCards = document.querySelector('aside-section')

const asideContainer = document.createElement('aside')
asideContainer.classList.add('aside')
asideContainer.classList.add('container')

const vacancySelectorDiv = document.createElement('div')
vacancySelectorDiv.classList.add('vacancy-selector-div')
vacancySelectorDiv.classList.add('container')
vacancySelectorDiv.setAttribute('id', 'vacancy-selector-id')

const h3SelectedVacancy = document.createElement('h3')
h3SelectedVacancy.classList.add('selected-vacancy-title')
h3SelectedVacancy.innerText = ('Vagas selecionadas')

const asideCardsConst = document.createElement('div')
asideCardsConst.classList.add('aside-cards')

const paragraph = document.createElement('p')
paragraph.classList.add('paragraph')
paragraph.innerText = ('Você ainda não aplicou para nenhuma vaga')

const divAllP = document.createElement('div')
divAllP.classList.add('div-all-p')

const p1 = document.createElement('p')
p1.classList.add('p1')

const p2 = document.createElement('p')
p2.classList.add('p2')

const divP = document.createElement('div')
divP.classList.add('div-p')

const p3 = document.createElement('p')
p3.classList.add('p3')

const p3Const = document.createElement('p')
p3Const.classList.add('p3')

const p4 = document.createElement('p')
p4.classList.add('p4')


divP.append(p3, p3Const, p4)
divAllP.append(p1, p2, divP)
asideCardsConst.append(paragraph, divAllP)
vacancySelectorDiv.append(h3SelectedVacancy, asideCardsConst)
asideContainer.appendChild(vacancySelectorDiv)
asideCards.append(asideContainer)

return asideCards */


/* const sectionCardsContainer = document.querySelector('mini-cards-section')

const asideCardsContainer = document.createElement('aside')
asideCardsContainer.classList.add('mini-cards-apply-vacancy')
asideCardsContainer.classList.add('container')

const  asideDivMiniCards = document.createElement('div')
asideDivMiniCards.classList.add('remove-button-h3-div')

const removeButtonH3 = document.createElement('div')
removeButtonH3.classList.add('remove-button-h3-div')

const h3PositionJob = document.createElement('h3')
h3PositionJob.classList.add('position-job')
h3PositionJob.innerText = ('Pessoa desenvolvedora front-end - React JS')

const buttonCloseButton = document.createElement('button')
buttonCloseButton.classList.add('close-button-class')
buttonCloseButton.setAttribute('id', 'close-button-id')
buttonCloseButton.type = ('submit')

const imgTrashButton = document.createElement('img')
imgTrashButton.src = ('./assets/img/trash.svg')

const locationCompanyDivAside = document.createElement('div')
locationCompanyDivAside.classList.add('location-company-div-aside')

const smallCompanyMiniAside = document.createElement('small')
smallCompanyMiniAside.innerText = ('Kenzie Academy')

const smallLocationMiniAside = document.createElement('small')
smallLocationMiniAside.innerText = ('Cuuritiba')

buttonCloseButton.appendChild(imgTrashButton)
removeButtonH3.append(h3PositionJob, buttonCloseButton)
locationCompanyDivAside.append(smallCompanyMiniAside, smallLocationMiniAside)
asideDivMiniCards.append(removeButtonH3, locationCompanyDivAside)
asideCardsContainer.appendChild(asideDivMiniCards)
sectionCardsContainer.appendChild(asideCardsContainer)

return sectionCardsContainer */