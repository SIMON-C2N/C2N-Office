package in.c2n.portal.entities;

import static javax.persistence.GenerationType.IDENTITY;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name = "student_conversations")
public class StudentConversations implements java.io.Serializable {

	private static final long serialVersionUID = 6055688794843621822L;

	private Integer id;
	private int studentId;
	private String conversation;
	private Date postdate;

	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "id", unique = true, nullable = false)
	public Integer getId() {
		return this.id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	@Column(name = "student_id", nullable = false)
	public int getStudentId() {
		return this.studentId;
	}

	public void setStudentId(int studentId) {
		this.studentId = studentId;
	}

	@Column(name = "conversation", nullable = false)
	public String getConversation() {
		return this.conversation;
	}

	public void setConversation(String conversation) {
		this.conversation = conversation;
	}
	
	@Temporal(TemporalType.DATE)
	@Column(name = "postdate", length = 10)
	public Date getPostdate() {
		return this.postdate;
	}

	public void setPostdate(Date postdate) {
		this.postdate = postdate;
	}

}