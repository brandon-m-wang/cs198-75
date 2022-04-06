---
title: hw8
header: "Project 8: Quizlet-ish"
due: Fri, 4/15
introduction: >+
  OKAY LAST PROJECT YO. This is your final assignment for this class (other than
  your final team project of course). You will be building Quizlet-ish - an app
  that allows you to make flashcards for study use. In this project, we will be
  incorporating Google Firebase and Firestore to add persistence to the app.


  Adapted from raywenderlich.com

setup: >
  <p>For this project, I won’t be providing a skeleton code file for you to
  clone. You will be starting from scratch because I want you to be able to go
  through the full setup of Firebase and Firestore. Don’t worry. I will still be
  providing most of the code and will also link my GitHub link to the solutions
  at the end of the project. Ignore the git commands below. </p>

  <ol>

  <li>Open up Xcode </li>

  <li>Click on File &gt; New &gt; Project</li>

  <li>Select App</li>

  <li>Name the product “Quizlet-ish”</li>

  <li>Put com.YOURNAME as the organization id</li>

  <li>Interface should be SwiftUI and the language should be Swift. Leave the boxes unchecked. (see below) Write down the bundle identifier somewhere. You will need it in a later part.</li>

  <li>Hit Next and then on the next page, make sure the selected folder at the top is your cubstart directory that you normally clone into. This is important. Otherwise, you won’t be able to push your code to GitHub and submit to Gradescope. Check the git repo option. See below</li>

  <li>Click create</li>

  <li>Now we want to add a remote repo to your project. Click on the Source Control navigator on the top left (see below for the icon). Open up the Quizlet-ish drop down. Right click Remotes. Select “New “Quizlet-ish” remote”. Hit create.</li>

  </ol>
skeleton: N/A
sections:
  - type: ibs
    imageblock: /assets/images/pic1.png
  - type: ibs
    imageblock: /assets/images/pic2.png
  - type: ibs
    imageblock: /assets/images/pic3.png
  - type: phs
    partheader: "Part 1: Setting Up Firebase and Firestore"
  - type: ps
    paragraph: >
      <h2 id="firebase">Firebase</h2>

      <p>To get started with this project, you are going to need to create a Firebase account. The following steps will walk you through how to do this:</p>

      <p><strong>Setting Up Account</strong></p>

      <ol>

      <li>Go to the Firebase website: <a href="https://firebase.google.com/">https://firebase.google.com/</a></li>

      <li>At the top right, click on go to console and log in with your Google Account <strong><em>Use your personal account, NOT YOUR BERKELEY ACCOUNT</em></strong></li>

      </ol>

      <p><strong>Creating a Project</strong></p>

      <ol>

      <li>Click on “Add Project”</li>

      <li>Type in “Quizlet-ish” for the name of the project</li>

      <li>Disable Google Analytics (we will not be using this in this project)</li>

      <li>Click continue and you should be at the dashboard</li>

      </ol>

      <p><strong>Adding Your App</strong></p>

      <ol>

      <li>Select the iOS circle above “Add an app to get started”</li>

      <li>For the iOS bundle ID field, enter the bundle ID you wrote down earlier</li>

      <li>Follow the instructions provided on downloading “GoogleService-Info.plist” and adding it to the project. Check “Copy Items if needed”</li>

      <li>Follow the instructions on adding the Firebase SDK to your iOS App</li>

      <li>Skip the initialization code instructions that are provided. Instead add the following code to your “Quizlet-ishApp” file and import Firebase. It should look like the following. Click next until you are back at the dashboard.</li>

      </ol>
  - type: ibs
    imageblock: /assets/images/pic4.png
  - type: ps
    paragraph: >
      <h2 id="firestore">Firestore</h2>

      <p>Now to set up Firestore Database!</p>

      <ol>

      <li>In the console on the left, under Build, select Firestore Database</li>

      <li>Click on Create Database</li>

      <li>Follow the instructions provided: Select “test mode” and &quot;nam5(us-central)” when prompted</li>

      </ol>

      <p>Okay, that should be all the setup! Now, for the actual coding.</p>
  - type: phs
    partheader: "Part 2: MVVM and Database Basics"
  - type: ps
    paragraph: >
      <h2 id="mvvm-setup">MVVM SetUp</h2>

      <p>Once again, we will be using a MVVM app set up. For this project, we will have Model, Views, View Model, and Repository</p>

      <p><strong>Model</strong> - hold the app data</p>

      <p><strong>Views</strong> - display the app data</p>

      <p><strong>View Model</strong> - transform the data from the models to the views</p>

      <p><strong>Repository</strong> - handle data source communication</p>

      <p>Follow the image below and create the Groups and Files exactly how it is shown.</p>
  - type: ibs
    imageblock: /assets/images/pic5.png
  - type: ps
    paragraph: >
      <h2 id="cloud-firestore-database">Cloud Firestore Database</h2>

      <p>A quick overview on Firestore...</p>

      <p>Cloud Firestore is a NoSQL database that uses collections and documents to structure data.</p>

      <p><strong>Collections</strong> - hold the documents</p>

      <p><strong>Documents</strong> - have fields that constitute the entities of the app</p>

      <p>In our case, a card will be a document and a group of cards will be the collection. We will be writing queries to manipulate the data from the collections.</p>
  - type: phs
    partheader: "Part 3: Playing with Cards"
  - type: ps
    paragraph: >
      <h3 id="-creating-the-card-model-"><strong>Creating the Card
      Model</strong></h3>

      <p>In the Card.swift file under Models, add the following code:</p>

      <p>This is just setting up the Card model. Nothing complicated.</p>
  - type: cbs
    codeblock:
      code: |-
        import FirebaseFirestoreSwift

        struct Card: Identifiable, Codable {
          @DocumentID var id: String?
          var question: String
          var answer: String
          var successful: Bool = true
          var userId: String?
        }
      lang: swift
  - type: ps
    paragraph: >
      <h3 id="-adding-new-cards-w-the-repository-"><strong>Adding New Cards w/
      the Repository</strong></h3>

      <p>Navigate to your Repository file and add the following code:</p>
  - type: cbs
    codeblock:
      code: |-
        import FirebaseFirestore
        import FirebaseFirestoreSwift
        import Combine 

        class CardRepository: ObservableObject {
          private let path: String = "cards"
          private let store = Firestore.firestore()
          func add(_ card: Card) {
            do {
              _ = try store.collection(path).addDocument(from: card)
            } catch {
              fatalError("Unable to add card: \(error.localizedDescription).")
            }
          }
        }
      lang: swift
  - type: ps
    paragraph: >
      <p>This code is doing several things:</p>

      <ol>

      <li>You are importing all of those things in order to get access to the Firestore API and the commands needed to use it<ol>

      <li>FirebaseFirestore - access to the API</li>

      <li>FirebaseFirestoreSwift - lets you convert Cards into documents and back</li>

      <li>Combine - set of declarative APIs for Swift</li>

      </ol>

      </li>

      <li>Define <code>CardRepository</code> . Then, declare <code>path</code> and assigned the value <code>card</code> which is the collection name in Firestore.</li>

      <li>Declare <code>store</code> and assign a reference to the <code>Firestore</code> instance.</li>

      <li>Next, you define <code>add(_:)</code> and use a do-catch block to capture any errors thrown by the code</li>

      <li>Create a reference to the cards collection using <code>path</code>, and then pass <code>card</code> to <code>addDocument(from:encoder:completion:)</code>. This adds a new card to the collection.</li>

      </ol>

      <h3 id="connecting-the-model-w-the-views">Connecting the Model w/ the Views</h3>

      <p>Go to CardListViewModel.swift in your ViewModels group and add the following code:</p>
  - type: cbs
    codeblock:
      code: |-
        import Combine

        class CardListViewModel: ObservableObject {
          @Published var cardRepository = CardRepository()

          func add(_ card: Card) {
            cardRepository.add(card)
          }
        }
      lang: swift
  - type: ps
    paragraph: |
      <p>Open up NewCardForm.swift and add the following code:</p>
  - type: cbs
    codeblock:
      code: |-
        import SwiftUI

        struct NewCardForm: View {
          @State var question: String = ""
          @State var answer: String = ""
          @Environment(\.presentationMode) var presentationMode
          @ObservedObject var cardListViewModel: CardListViewModel

          var body: some View {
            VStack(alignment: .center, spacing: 30) {
              VStack(alignment: .leading, spacing: 10) {
                Text("Question")
                  .foregroundColor(.gray)
                TextField("Enter the question", text: $question)
                  .textFieldStyle(RoundedBorderTextFieldStyle())
              }
              VStack(alignment: .leading, spacing: 10) {
                Text("Answer")
                  .foregroundColor(.gray)
                TextField("Enter the answer", text: $answer)
                  .textFieldStyle(RoundedBorderTextFieldStyle())
              }
              Button(action: addCard) {
                Text("Add New Card")
                  .foregroundColor(.blue)
              }
              Spacer()
            }
            .padding(EdgeInsets(top: 80, leading: 40, bottom: 0, trailing: 40))
          }
        }

        private func addCard() {
            let card = Card(question: question, answer: answer)
            cardListViewModel.add(card)
            presentationMode.wrappedValue.dismiss()
          }
        }

        struct NewCardForm_Previews: PreviewProvider {
          static var previews: some View {
            NewCardForm(cardListViewModel: CardListViewModel())
          }
        }
      lang: swift
  - type: ps
    paragraph: >
      <p>This code creates a <code>Card</code> using the <code>question</code>
      and <code>answer</code> properties already declared at the top, adds the
      new <code>card</code> using the view model, and then dismisses the current
      view.</p>

      <p>Finally, go to CardListView.swift and add in the following code:</p>
  - type: cbs
    codeblock:
      code: >-
        import SwiftUI


        struct CardListView: View {
          var cards: [Card] = []
          @State var showForm = false

          var body: some View {
            NavigationView {
              VStack {
                Spacer()
                VStack {
                  GeometryReader { geometry in
                    ScrollView(.horizontal) {
                      HStack(spacing: 10) {
                        ForEach(cards, id: \.id) { card in
                          CardView(card: card)
                            .padding([.leading, .trailing])
                        }
                      }.frame(height: geometry.size.height)
                    }
                  }
                }
                Spacer()
              }
              .sheet(isPresented: $showForm) {
                NewCardForm(cardListViewModel: CardListViewModel())
              }
              .navigationBarTitle("💯 Quizlet-ish")
                .navigationBarItems(trailing: Button(action: { showForm.toggle() }) {
                  Image(systemName: "plus")
                    .font(.title)
                })
            }
            .navigationViewStyle(StackNavigationViewStyle())
          }
        }


        struct CardListView_Previews: PreviewProvider {
          static var previews: some View {
            CardListView(cards: testData)
          }
        }
      lang: swift
  - type: ps
    paragraph: |
      <h3 id="displaying-cards">Displaying Cards</h3>
      <p><strong>Setting up the CardViewModel</strong></p>
      <p>In your CardViewModel.swift add the following code:</p>
  - type: cbs
    codeblock:
      code: |-
        import Combine

        class CardViewModel: ObservableObject, Identifiable {
          private let cardRepository = CardRepository()
          @Published var card: Card
          private var cancellables: Set<AnyCancellable> = []
          var id = ""

          init(card: Card) {
            self.card = card
            $card
              .compactMap { $0.id }
              .assign(to: \.id, on: self)
              .store(in: &cancellables)
          }
        }
      lang: swift
  - type: ps
    paragraph: >
      <p>Here you are declaring <code>CardViewModel</code> .
      <code>Cancellables</code> is used to store subscriptions so you can cancel
      them later. The code at the end is binding for card between the id of the
      card and the view model’s id and then storing it in cancellables.</p>

      <p><strong>Setting up the Repository</strong></p>

      <p>Navigate to your CardRepository.swift file and add the following code below the property definitions from before:</p>
  - type: cbs
    codeblock:
      code: |-
        @Published var cards: [Card] = []

        init() {
          get()
        }

        func get() {
          store.collection(path)
            .addSnapshotListener { querySnapshot, error in
              if let error = error {
                print("Error getting cards: \(error.localizedDescription)")
                return
              }

                self.cards = querySnapshot?.documents.compactMap { document in
                try? document.data(as: Card.self)
              } ?? []
            }
        }
      lang: swift
  - type: ps
    paragraph: >
      <p>This code is essentially grabbing the data from Firestore and mapping
      the documents to Cards that you can use.</p>

      <p><strong>Setting up CardListViewModel</strong></p>

      <p>Open up CardListViewModel and add the following code:</p>
  - type: cbs
    codeblock:
      code: |-
        @Published var cardViewModels: [CardViewModel] = []
        private var cancellables: Set<AnyCancellable> = []

        init() {
          cardRepository.$cards.map { cards in
            cards.map(CardViewModel.init)
          }
          .assign(to: \.cardViewModels, on: self)
          .store(in: &cancellables)
        }
      lang: swift
  - type: ps
    paragraph: >
      <p>This code listens to cards and creates an array of CardViewModel’s by
      mapping each Card element into an array. It then assigns the results to
      cardViewModels and stores into cancellables so that the cards are
      cancelled when they are deinitialized.</p>

      <p><strong>Setting up CardView</strong></p>

      <p>Add the following code to CardView.swift:</p>
  - type: cbs
    codeblock:
      code: >-
        import SwiftUI


        struct CardView: View {

        	var cardViewModel: CardViewModel  @State var showContent: Bool = false
          @State var viewState = CGSize.zero
          @State var showAlert = false

          var body: some View {
            ZStack(alignment: .center) {
              backView.opacity(showContent ? 1 : 0)
              frontView.opacity(showContent ? 0 : 1)
            }
            .frame(width: 250, height: 400)
            .background(Color.orange)
            .cornerRadius(20)
            .shadow(color: Color(.blue).opacity(0.3), radius: 5, x: 10, y: 10)
            .rotation3DEffect(.degrees(showContent ? 180.0 : 0.0), axis: (x: 0, y: -1, z: 0))
            .offset(x: viewState.width, y: viewState.height)
            .animation(.spring(response: 0.6, dampingFraction: 0.8, blendDuration: 0))
            .onTapGesture {
              withAnimation {
                showContent.toggle()
              }
            }
            .gesture(
              DragGesture()
                .onChanged { value in
                  viewState = value.translation
                }
              .onEnded { value in
                if value.location.y < value.startLocation.y - 40.0 {
                  self.showAlert.toggle()
                }
                viewState = .zero
              }
            )
              .alert(isPresented: $showAlert) {
                Alert(
                  title: Text("Remove Card"),
                  message: Text("Are you sure you want to remove this card?"),
                  primaryButton: .destructive(Text("Remove")) {
                  },
                  secondaryButton: .cancel()
                )
              }
          }

          var frontView: some View {
            VStack(alignment: .center) {
              Spacer()
        			Text(cardViewModel.card.question)        
        				.foregroundColor(.white)
                .font(.system(size: 20))
                .fontWeight(.bold)
                .multilineTextAlignment(.center)
                .padding(20.0)
              Spacer()
            }
          }

          var backView: some View {
            VStack(alignment: .center) {
              Spacer()
              Text(cardViewModel.card.answer)
                .foregroundColor(.white)
                .font(.body)
                .padding(20.0)
                .multilineTextAlignment(.center)
                .animation(.easeInOut)
              Spacer()
            }
            .rotation3DEffect(.degrees(180), axis: (x: 0.0, y: 1.0, z: 0.0))
          }
        }
      lang: swift
  - type: ps
    paragraph: >
      <p>This is the UI for the CardView and also sets up your code to pull from
      the View Model rather than the Card model.</p>

      <p><strong>Setting up CardListView</strong></p>

      <p>Replace your code in CardListView with this:</p>
  - type: cbs
    codeblock:
      code: >-
        import SwiftUI


        struct CardListView: View {
          @ObservedObject var cardListViewModel = CardListViewModel()
          @State var showForm = false

          var body: some View {
            NavigationView {
              VStack {
                Spacer()
                VStack {
                  GeometryReader { geometry in
                    ScrollView(.horizontal) {
                      HStack(spacing: 10) {
                        ForEach(cardListViewModel.cardViewModels) { cardViewModel in
                          CardView(cardViewModel: cardViewModel)
                            .padding([.leading, .trailing])
                        }
                      }.frame(height: geometry.size.height)
                    }
                  }
                }
                Spacer()
              }
              .sheet(isPresented: $showForm) {
                NewCardForm(cardListViewModel: CardListViewModel())
              }
              .navigationBarTitle("💯 Quizlet-ish")
                // swiftlint:disable multiple_closures_with_trailing_closure
                .navigationBarItems(trailing: Button(action: { showForm.toggle() }) {
                  Image(systemName: "plus")
                    .font(.title)
                })
            }
            .navigationViewStyle(StackNavigationViewStyle())
          }
        }
      lang: swift
  - type: ps
    paragraph: >
      <p>Here you are changing the wrapping list view so that it’ll work with
      the Card View Model now instead of just the Card View. The ForEach
      statement is iterating over the array of CardViewModels and creating a
      CardView for each one so that they are displayed in your view.</p>
---
