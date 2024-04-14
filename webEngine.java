public class webEngine extends JavaFx {//Support to the html browser
/* https://docs.oracle.com/javase/8/javafx/api/javafx/scene/web/WebEngine.html#getLoadWorker-- */
// public final class WebEngine extends Object
public static void main(String[] args) {}
}
/* */
import javafx.concurrent.Worker.State;
final Stage stage;
webEngine.getLoadWorker().stateProperty().addListener(
        new ChangeListener<State>() {
            public void changed(ObservableValue ov, State oldState, State newState) {
                if (newState == State.SUCCEEDED) {
                    stage.setTitle(webEngine.getLocation());
                }
            }
        });
webEngine.load("http://javafx.com");
//
EventListener listener = new EventListener() {
    public void handleEvent(Event ev) {
        Platform.exit();
    }
};

Document doc = webEngine.getDocument();
Element el = doc.getElementById("exit-app");
((EventTarget) el).addEventListener("click", listener, false);
// https://www.oracle.com/technical-resources/articles/java/json.html